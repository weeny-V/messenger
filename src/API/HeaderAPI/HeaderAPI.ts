import {
    doc,
    getDoc,
    runTransaction,
    collection,
    getDocs,
    updateDoc,
    arrayRemove,
    arrayUnion
} from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const HeaderAPI = {
    updateDarkMode: function ( value: boolean ) {
        const auth = getAuth();
        onAuthStateChanged( auth, async ( user ) => {
            if (user) {
                const uid = user.uid
                const darkModeDocRef = doc( db, 'profile', uid )

                await runTransaction( db, async transaction => {
                    const dmDoc = await transaction.get( darkModeDocRef )
                    if (!dmDoc.exists()) {
                        throw 'Document doesn\'t exist!!!'
                    }
                    transaction.update( darkModeDocRef, {
                        darkMode: value
                    } )
                } )
            }
        } );
    },
    getUserInfo: async ( id: string ) => {
        const userDocRef = doc( db, 'profile', id )
        try {
            const data = await getDoc( userDocRef )
            if (data.exists()) {
                return data.data()
            }
        } catch (e) {
            alert( e )
        }
    },
    getAllUsers: async () => {
        let users:Array<any> = []
        try {
            const users: Array<any> = []
            const data = await getDocs( collection( db, 'profile' ) )
            data.forEach(doc => {
                users.push(doc.data())
            })
            return users
        }
        catch (e) {
            alert( e )
        }
    },
    declineFriend: (id: string, removeElem: string) => {
        const ref = doc(db, 'profile', id)
        updateDoc(ref, {
            friends: arrayRemove(removeElem)
        })
    },
}