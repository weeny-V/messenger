import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

interface ChatListInterface {
    chatId: string,
    timestamp: string,
    id: string;
    lastMessage: string;
}

interface ChatFullListInterface {
    chatId: string;
    timestamp: string;
    name: string;
    photo: string;
    id: string | string[];
    lastMessage: string;
}

export const ChatAPI = {
    getChats: async ( id: string ) => {
        let chatList: ChatListInterface[] = []
        const collectionRef = await collection( db, 'profile', id, 'chats' )
        const data = await getDocs( collectionRef )
        data.forEach( ( elem ) => {
            chatList.push( {
                timestamp: elem.data().timestamp,
                id: elem.data().id,
                lastMessage: elem.data().lastMessage,
                chatId: elem.id,
            } )
        } )
        return chatList
    },
    getFullChat: async ( list: ChatListInterface ) => {
        let chatFullList: ChatFullListInterface[] = []
        for await (let elem of Object.values( list )) {
            const userRef = typeof elem.id === 'string'
                ? doc( db, 'profile', elem.id )
                : doc( db, 'profile', elem.id[0], 'chats', elem.chatId )
            const data = await getDoc( userRef )
            if (data.exists()) {
                chatFullList.push( {
                    timestamp: elem.timestamp,
                    id: elem.id,
                    lastMessage: elem.lastMessage,
                    chatId: elem.chatId,
                    name: data.data().name,
                    photo: data.data().photo,
                } )
            }
        }
        return chatFullList
    },
}