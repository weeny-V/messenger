import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, realDB } from '../../firebase';
import { SettingsAPI } from '../SettingsAPI/SettingsApi';
import { set } from 'firebase/database';
import { getDownloadURL, getStorage, uploadBytesResumable } from 'firebase/storage';
import *  as FireDatabase from 'firebase/database';
import * as FireStorage from 'firebase/storage'
import { setUpload } from '../../redux/reducers/MainSlice';

const dbRef = FireDatabase.ref
const storageRef = FireStorage.ref

interface FriendsListInterface {
    name: string;
    photo: string;
    id: string;
    isAdd: boolean;
}

export const GroupAPI = {
    getFriendList: async (uidList: string[]) => {
        if(!uidList || uidList.length === 0) {
           return
        }
        const friendsList: FriendsListInterface[] = []
        for await (const uid of uidList) {
            const friendRef = doc(db, 'profile', uid)
            const data = await getDoc(friendRef)
            if(data.exists()) {
                await SettingsAPI.getAvatarURL(data.data().id)
                    .then(url => {
                        if(url) {
                            friendsList.push({
                                name: data.data().name,
                                photo: url,
                                id: data.data().id,
                                isAdd: false,
                            })
                        }
                    })
            }
        }
        return friendsList
    },
    createGroupChat: async (group: string[], image: File, tag: string, chatName: string, description: string) => {
        const timestamp = new Date()
        const chatID = `-${String(+timestamp)}`
        const storage = getStorage()
        const chatImageRef = storageRef(storage, `${chatID}`)
        const uploadTask = uploadBytesResumable( chatImageRef, image )

        await uploadTask.on( 'state_changed',
            () => {
            },
            ( error ) => {
                alert( error )
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then( url => {
                    group.forEach((uid, index) => {
                        const userRef = doc(db, 'profile', uid, 'chats', chatID)
                        const message = index === 0
                            ? `You\'ve created group ${chatName}`
                            : `You\'ve been added to group ${chatName}`

                        setDoc(userRef, {
                            id: group,
                            lastMessage: 'No messages',
                            timestamp: '',
                            name: chatName,
                            description,
                            tag,
                            photo: url,
                        })
                        set(dbRef(realDB, `notifications/${uid}/${chatID}`), {
                            message,
                            type: 'MESSAGE',
                            photo: url,
                            timestamp: -(+timestamp),
                        });
                    })
                })
            }
        );
    }
}