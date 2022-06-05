import { doc, updateDoc, arrayUnion, setDoc } from 'firebase/firestore';
import { db, realDB } from '../../firebase';
import { ref, remove, set } from 'firebase/database';
import chats from '../../components/Chats/Chats';

export const ContactAPI = {
    addFriend: async ( id: string, myId: string ) => {
        try {
            const ref = doc( db, 'profile', myId )
            updateDoc( ref, {
                friends: arrayUnion( id)
            } )
        } catch (e) {
            alert( e )
        }
    },
    removeNotification: ( timestamp: number, id: string ) => {
        remove( ref( realDB, `notifications/${id}/${timestamp}` ) )
    },
    createChat: ( myId: string, friendId: string ) => {
        const timestamp = new Date()
        const chatID = String( +timestamp )
        const firestoreMyRef = doc( db, 'profile', myId, 'chats', chatID )
        setDoc( firestoreMyRef, {
                lastMessage: 'No Messages',
                timestamp: null,
                id: friendId,
            }
        )
        const firestoreFriendRef = doc( db, 'profile', friendId, 'chats', chatID )
        setDoc( firestoreFriendRef, {
                lastMessage: 'No messages',
                timestamp: null,
                id: myId,
            }
        )
    }
}