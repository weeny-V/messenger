import * as Effects from 'redux-saga/effects'
import { HeaderAPI } from '../../API/HeaderAPI/HeaderAPI';
import { SettingsAPI } from '../../API/SettingsAPI/SettingsApi';
import { PayloadAction } from '@reduxjs/toolkit';
import {
    addFriend,
    setChatLoading,
    setChats,
    setDarkMode,
    setGroupList,
    setGroupLoading,
    setPhoto
} from '../reducers/ProfileSlice';
import { setLoading, setUpload } from '../reducers/MainSlice';
import { setUsers } from '../reducers/ContactSlice';
import { ContactAPI } from '../../API/ContactAPI/ContactAPI';
import { ChatAPI } from '../../API/ChatAPI/ChatAPI';
import { GroupAPI } from '../../API/GroupAPI/GroupAPI';

const call: any = Effects.call;
const put: any = Effects.put;
const takeEvery: any = Effects.takeEvery;
const all: any = Effects.all;

interface GeneratorLoggedInterface {
    echo: boolean;
    noise: boolean;
    voice: boolean;
    slack: string;
    twitter: string;
    facebook: string;
    github: string;
    instagram: string;
    name: string;
    gender: string;
    status: string;
    id: string;
    email: string;
    bio: string;
    phone: string;
    country: string;
    darkMode: boolean;
    friends: Array<string>
}

interface AcceptFriendType {
    id: string,
    myId: string,
    photo: string,
    name: string,
    timestamp: number,
}

interface ChatListType {
    chatId: string,
    timestamp: string,
    id: string;
    lastMessage: string;
}

interface FullChatListInterface {
    chatId: string;
    timestamp: string;
    name: string;
    photo: string;
    id: string;
    lastMessage: string;
}

interface GroupChatInterface {
    group: string[];
    groupName: string;
    tag: string;
    description: string;
    groupImage: File;
}

function* getLoggedUser( { payload }: PayloadAction<string> ) {
    try {
        const user: GeneratorLoggedInterface = yield call( HeaderAPI.getUserInfo, payload )
        yield put( {
            type: 'profile/setUser', payload: {
                echo: user.echo,
                noise: user.noise,
                voice: user.voice,
                slack: user.slack,
                twitter: user.twitter,
                facebook: user.facebook,
                github: user.github,
                instagram: user.instagram,
                name: user.name,
                status: user.status,
                id: user.id,
                email: user.email,
                bio: user.bio,
                phone: user.phone,
                country: user.country,
                darkMode: user.darkMode,
                gender: user.gender,
                friends: [...user.friends]
            }
        } )
        yield put( setLoading( false ) )
    } catch (e) {
        yield put( setLoading( false ) )
    }
}

function* watchGetLoggedUser() {
    yield takeEvery( 'SET_USER_INFO', getLoggedUser )
}

function* getUserPhoto( { payload }: PayloadAction<string> ) {
    try {
        const photoUrl: string = yield call( SettingsAPI.getAvatarURL, payload )
        yield put( setPhoto( photoUrl ) )
        yield put( setLoading( false ) )
    } catch (e) {
        alert( e )
        yield put( setLoading( false ) )
    }
}

function* watchGetUserPhoto() {
    yield takeEvery( 'SET_PHOTO_REQUEST', getUserPhoto )
}

function* darkModeUpdateRequest( { payload }: PayloadAction<boolean> ) {
    try {
        yield put( setDarkMode( payload ) )
        yield call( HeaderAPI.updateDarkMode, payload )
    } catch (e) {
        alert( e )
    }
}

function* watchDarkModeUpdate() {
    yield takeEvery( 'UPDATE_DARK_MODE', darkModeUpdateRequest )
}

function* fetchUploadingAnyInfo( { payload }: PayloadAction<{ curPassword: string, newPassword: string }> ) {
    try {
        yield put( setUpload( true ) )
        yield call( SettingsAPI.changePassword, payload.curPassword, payload.newPassword )
        yield put( setUpload( false ) )
    } catch (e) {
        alert( e )
        yield put( setUpload( false ) )
    }
}

function* watchFetchUploadingAnyInfo() {
    yield takeEvery( 'UPDATE_PASSWORD_INFO', fetchUploadingAnyInfo )
}

function* getAllUsersList( { payload }: PayloadAction<string> ) {
    try {
        const users: Array<any> = yield call( HeaderAPI.getAllUsers )
        yield put(setUsers({users, payload}))
    } catch (e) {
        alert( e )
    }
}

function* watchGetAllUsersList() {
    yield takeEvery( 'GET_ALL_USERS', getAllUsersList )
}

function* requestAddFriend({payload}: PayloadAction<{ id:string, myId: string}>) {
    try {
        yield put(addFriend(payload.id))
        yield call(ContactAPI.addFriend,payload.id, payload.myId)
    } catch (e) {
        alert(e)
    }
}

function* watchRequestAddFriend() {
    yield takeEvery('ADD_FRIEND', requestAddFriend)
}

function* acceptFriend({payload}: PayloadAction<AcceptFriendType>) {
    try {
        yield put(addFriend(payload.id))
        yield call(ContactAPI.addFriend, payload.id, payload.myId, payload.photo, payload.name)
        yield call(ContactAPI.createChat, payload.myId, payload.id)
        yield call(ContactAPI.removeNotification, payload.timestamp, payload.myId)
    } catch (e) {
        alert(e)
    }
}

function* watchAcceptFriend() {
    yield takeEvery('ACCEPT_FRIEND', acceptFriend)
}

function* fetchChatsList({payload}: PayloadAction<string>) {
    try {
        yield put(setChatLoading(true))
        const list: ChatListType[] = yield call(ChatAPI.getChats, payload)
        const fullList: FullChatListInterface[] = yield call(ChatAPI.getFullChat, list)
        yield put(setChats(fullList))
        yield put(setChatLoading(false))
    } catch (e) {
        console.log(e)
    }
}

function* watchFetchChatsList() {
    yield takeEvery('SET_CHATS', fetchChatsList)
}

function* getFriendsList( { payload }: PayloadAction<string[]>) {
    yield put(setGroupLoading(true))
    const friendList: {name: string, id: string, photo: string, isAdd: boolean}[] = yield call(GroupAPI.getFriendList, payload)
    yield put(setGroupList(friendList))
    yield put(setGroupLoading(false))
}

function* watchGetFriendsList() {
    yield takeEvery('SET_FRIEND_LIST', getFriendsList)
}

function* createGroupChat({payload}: PayloadAction<GroupChatInterface>) {
    yield call(GroupAPI.createGroupChat, payload.group, payload.groupImage, payload.groupName, payload.tag, payload.description)
}

function* watchCreateGroupChat() {
    yield takeEvery('CREATE_GROUP_CHAT', createGroupChat)
}

export function* rootSaga() {
    yield all( [
        watchGetLoggedUser(),
        watchGetUserPhoto(),
        watchDarkModeUpdate(),
        watchFetchUploadingAnyInfo(),
        watchGetAllUsersList(),
        watchRequestAddFriend(),
        watchAcceptFriend(),
        watchFetchChatsList(),
        watchGetFriendsList(),
        watchCreateGroupChat(),
    ] )
}

