import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import defaultImage from '../../assets/user.png';

interface NotificationInterface {
    name: string;
    type: string;
    message: string;
    photo: string;
}

interface ChatListType {
    chatId: string;
    timestamp: string;
    name: string;
    photo: string;
    id: string;
    lastMessage: string;
}

interface CurrentChatInterface {
    name: string;
    photo: string;
    chatId: string;
}

interface GroupUsersListInterface {
    name: string;
    photo: string;
    id: string;
    isAdd: boolean;
}

interface ProfileReducerInterface {
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
    photo: string;
    bio: string;
    phone: string;
    country: string;
    darkMode: boolean;
    fetching: boolean;
    friends: string[];
    notification: Array<NotificationInterface>
    chats: ChatListType[];
    currentChat: CurrentChatInterface[];
    chatLoading: boolean;
    groupUsersList: GroupUsersListInterface[];
    groupLoading: boolean;
}

const initialState: ProfileReducerInterface = {
    echo: false,
    noise: false,
    voice: false,
    slack: '',
    twitter: '',
    facebook: '',
    github: '',
    instagram: '',
    name: 'Your Full Name',
    gender: 'Male',
    status: '',
    id: '1',
    email: '',
    photo: defaultImage,
    bio: '',
    phone: '+(380)0663015013',
    country: 'Your Country',
    darkMode: false,
    fetching: false,
    friends: [],
    notification: [],
    chats: [],
    chatLoading: false,
    currentChat: [],
    groupUsersList: [],
    groupLoading: false,
}

export const profileSlice = createSlice( {
    name: 'profile',
    initialState,
    reducers: {
        setEcho: ( state, action: PayloadAction<boolean> ) => {
            state.echo = action.payload
        },
        setNoise: ( state, action: PayloadAction<boolean> ) => {
            state.noise = action.payload
        },
        setVoice: ( state, action: PayloadAction<boolean> ) => {
            state.voice = action.payload
        },
        setSlack: ( state, action: PayloadAction<string> ) => {
            state.slack = action.payload
        },
        setTwitter: ( state, action: PayloadAction<string> ) => {
            state.twitter = action.payload
        },
        setFacebook: ( state, action: PayloadAction<string> ) => {
            state.facebook = action.payload
        },
        setGithub: ( state, action: PayloadAction<string> ) => {
            state.github = action.payload
        },
        setInstagram: ( state, action: PayloadAction<string> ) => {
            state.instagram = action.payload
        },
        setName: ( state, action: PayloadAction<string> ) => {
            state.name = action.payload
        },
        setGender: ( state, action: PayloadAction<string> ) => {
            state.gender = action.payload
        },
        setStatus: ( state, action: PayloadAction<string> ) => {
            state.status = action.payload
        },
        setEmail: ( state, action: PayloadAction<string> ) => {
            state.email = action.payload
        },
        setPhoto: ( state, action: PayloadAction<string> ) => {
            state.photo = action.payload
        },
        setBio: ( state, action: PayloadAction<string> ) => {
            state.bio = action.payload
        },
        setPhone: ( state, action: PayloadAction<string> ) => {
            state.phone = action.payload
        },
        setCountry: ( state, action: PayloadAction<string> ) => {
            state.country = action.payload
        },
        setDarkMode: ( state, action: PayloadAction<boolean> ) => {
            state.darkMode = action.payload
        },
        setUser: (state, action: PayloadAction<ProfileReducerInterface>) => {
            state.echo = action.payload.echo
            state.noise = action.payload.noise
            state.voice = action.payload.voice
            state.slack = action.payload.slack
            state.twitter = action.payload.twitter
            state.facebook = action.payload.facebook
            state.github = action.payload.github
            state.instagram = action.payload.instagram
            state.name = action.payload.name
            state.status = action.payload.status
            state.id = action.payload.id
            state.email = action.payload.email
            state.bio = action.payload.bio
            state.phone = action.payload.phone
            state.country = action.payload.country
            state.gender = action.payload.gender
            state.darkMode = action.payload.darkMode
            state.friends = action.payload.friends
        },
        addFriend: (state, action:PayloadAction<string>) => {
            state.friends.push(action.payload)
        },
        setNotification: (state, action: PayloadAction<Array<NotificationInterface>>) => {
            state.notification = [...action.payload]
        },
        setChats: (state, action: PayloadAction<ChatListType[]>) => {
            state.chats = action.payload
        },
        setCurrentChat: (state, action: PayloadAction<CurrentChatInterface[]>) => {
            state.currentChat = action.payload
        },
        setChatLoading: (state, action: PayloadAction<boolean>) => {
            state.chatLoading = action.payload
        },
        setGroupList: (state, action: PayloadAction<GroupUsersListInterface[]>) => {
            state.groupUsersList = action.payload
        },
        changeStatusGroup: (state,  action: PayloadAction<number>) => {
            state.groupUsersList[action.payload].isAdd = !state.groupUsersList[action.payload].isAdd
        },
        setGroupLoading: (state, action: PayloadAction<boolean>) => {
            state.groupLoading = action.payload
        }
    }
} )

export const {
    setDarkMode,
    setPhoto,
    addFriend,
    setNotification,
    setChats,
    setCurrentChat,
    setChatLoading,
    setGroupList,
    changeStatusGroup,
    setGroupLoading,
} = profileSlice.actions

export default profileSlice.reducer