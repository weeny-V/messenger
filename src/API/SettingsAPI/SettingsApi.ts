import { db } from '../../firebase';
import { doc, getDoc, runTransaction, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {
    getAuth,
    onAuthStateChanged,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider
} from 'firebase/auth';
import { setUpload } from '../../redux/reducers/MainSlice';
import user from '../../assets/user.png'

export const SettingsAPI = {
    updatePhotoToStorage: ( file: File, dispatch: any ) => {
        const auth = getAuth();
        onAuthStateChanged( auth, async ( user ) => {
            if (user) {
                const uid = user.uid;
                const storage = getStorage()
                const avatarImageRef = ref( storage, `avatars/${uid}` )
                const uploadTask = uploadBytesResumable( avatarImageRef, file )
                const firestoreRef = doc(db, 'profile', user.uid)

                await uploadTask.on( 'state_changed',
                    () => {
                        dispatch( setUpload( true ) )
                    },
                    ( error ) => {
                        alert( error )
                    },
                    () => {
                        const path = URL.createObjectURL( file )
                        dispatch( { type: 'profile/setPhoto', payload: path } )
                        dispatch( setUpload( false ) )
                        getDownloadURL( ref( storage, `avatars/${uid}` ) )
                            .then( ( url ) => {
                                if (url) {
                                    updateDoc(firestoreRef, {
                                        photo: url
                                    })
                                }
                            } )
                            .catch( ( error ) => {
                                alert(error)
                            } );
                        alert( 'Photo successfully updated' )
                    }
                );
            }
        } );
    },
    getAvatarURL: async ( uid: string ) => {
        const storage = getStorage();
        return await getDownloadURL( ref( storage, `avatars/${uid}` ) )
            .then( ( url ) => {
                if (url) {
                    return url
                }
            } )
            .catch( ( error ) => {
                return user
            } );
    },
    updateName: ( name: string ) => {
        const auth = getAuth();
        try {
            onAuthStateChanged( auth, async ( user ) => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc( db, 'profile', uid )
                    await runTransaction( db, async transaction => {
                        const nameDoc = await transaction.get( docRef )
                        if (!nameDoc.exists()) {
                            throw 'No such a documents!!!'
                        }
                        transaction.update( docRef, { name } )
                    } )
                }
            } );
        } catch (e) {
            alert( e )
        }
    },
    updateStatus: ( status: string ) => {
        const auth = getAuth();
        try {
            onAuthStateChanged( auth, async ( user ) => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc( db, 'profile', uid )
                    await runTransaction( db, async transaction => {
                        const statusDoc = await transaction.get( docRef )
                        if (!statusDoc.exists()) {
                            throw 'No such a documents!!!'
                        }
                        transaction.update( docRef, { status } )
                    } )
                }
            } );
        } catch (e) {
            alert( e )
        }
    },
    updateEmail: ( email: string ) => {
        const auth = getAuth();
        try {
            onAuthStateChanged( auth, async ( user ) => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc( db, 'profile', uid )
                    await runTransaction( db, async transaction => {
                        const emailDoc = await transaction.get( docRef )
                        if (!emailDoc.exists()) {
                            throw 'No such a documents!!!'
                        }
                        transaction.update( docRef, { email } )
                    } )
                }
            } );
        } catch (e) {
            alert( e )
        }
    },
    updatePhone: ( phone: string ) => {
        const auth = getAuth();
        try {
            onAuthStateChanged( auth, async ( user ) => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc( db, 'profile', uid )
                    await runTransaction( db, async transaction => {
                        const phoneDoc = await transaction.get( docRef )
                        if (!phoneDoc.exists()) {
                            throw 'No such a documents!!!'
                        }
                        transaction.update( docRef, { phone } )
                    } )
                }
            } );
        } catch (e) {
            alert( e )
        }
    },
    updateBio: ( bio: string ) => {
        const auth = getAuth();
        try {
            onAuthStateChanged( auth, async ( user ) => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc( db, 'profile', uid )
                    await runTransaction( db, async transaction => {
                        const bioDoc = await transaction.get( docRef )
                        if (!bioDoc.exists()) {
                            throw 'No such a documents!!!'
                        }
                        transaction.update( docRef, { bio } )
                    } )
                }
            } );
        } catch (e) {
            alert( e )
        }
    },
    updateEcho: ( echo: boolean ) => {
        const auth = getAuth();
        try {
            onAuthStateChanged( auth, async ( user ) => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc( db, 'profile', uid )
                    await runTransaction( db, async transaction => {
                        const echoDoc = await transaction.get( docRef )
                        if (!echoDoc.exists()) {
                            throw 'No such a documents!!!'
                        }
                        transaction.update( docRef, { echo } )
                    } )
                }
            } );
        } catch (e) {
            alert( e )
        }
    },
    updateNoise: ( noise: boolean ) => {
        const auth = getAuth();
        try {
            onAuthStateChanged( auth, async ( user ) => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc( db, 'profile', uid )
                    await runTransaction( db, async transaction => {
                        const noiseDoc = await transaction.get( docRef )
                        if (!noiseDoc.exists()) {
                            throw 'No such a documents!!!'
                        }
                        transaction.update( docRef, { noise } )
                    } )
                }
            } );
        } catch (e) {
            alert( e )
        }
    },
    updateVoice: ( voice: boolean ) => {
        const auth = getAuth();
        try {
            onAuthStateChanged( auth, async ( user ) => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc( db, 'profile', uid )
                    await runTransaction( db, async transaction => {
                        const voiceDoc = await transaction.get( docRef )
                        if (!voiceDoc.exists()) {
                            throw 'No such a documents!!!'
                        }
                        transaction.update( docRef, { voice } )
                    } )
                }
            } );
        } catch (e) {
            alert( e )
        }
    },
    updateTwitter: ( twitter: string ) => {
        const auth = getAuth();
        try {
            onAuthStateChanged( auth, async ( user ) => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc( db, 'profile', uid )
                    await runTransaction( db, async transaction => {
                        const twitterDoc = await transaction.get( docRef )
                        if (!twitterDoc.exists()) {
                            throw 'No such a documents!!!'
                        }
                        transaction.update( docRef, { twitter } )
                    } )
                }
            } );
        } catch (e) {
            alert( e )
        }
    },
    updateFacebook: ( facebook: string ) => {
        const auth = getAuth();
        try {
            onAuthStateChanged( auth, async ( user ) => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc( db, 'profile', uid )
                    await runTransaction( db, async transaction => {
                        const facebookDoc = await transaction.get( docRef )
                        if (!facebookDoc.exists()) {
                            throw 'No such a documents!!!'
                        }
                        transaction.update( docRef, { facebook } )
                    } )
                }
            } );
        } catch (e) {
            alert( e )
        }
    },
    updateInstagram: ( instagram: string ) => {
        const auth = getAuth();
        try {
            onAuthStateChanged( auth, async ( user ) => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc( db, 'profile', uid )
                    await runTransaction( db, async transaction => {
                        const instagramDoc = await transaction.get( docRef )
                        if (!instagramDoc.exists()) {
                            throw 'No such a documents!!!'
                        }
                        transaction.update( docRef, { instagram } )
                    } )
                }
            } );
        } catch (e) {
            alert( e )
        }
    },
    updateGithub: ( github: string ) => {
        const auth = getAuth();
        try {
            onAuthStateChanged( auth, async ( user ) => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc( db, 'profile', uid )
                    await runTransaction( db, async transaction => {
                        const githubDoc = await transaction.get( docRef )
                        if (!githubDoc.exists()) {
                            throw 'No such a documents!!!'
                        }
                        transaction.update( docRef, { github } )
                    } )
                }
            } );
        } catch (e) {
            alert( e )
        }
    },
    updateSlack: ( slack: string ) => {
        const auth = getAuth();
        try {
            onAuthStateChanged( auth, async ( user ) => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc( db, 'profile', uid )
                    await runTransaction( db, async transaction => {
                        const slackDoc = await transaction.get( docRef )
                        if (!slackDoc.exists()) {
                            throw 'No such a documents!!!'
                        }
                        transaction.update( docRef, { slack } )
                    } )
                }
            } );
        } catch (e) {
            alert( e )
        }
    },
    changePassword: async ( currentPassword: string, newPassword: string) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            const uid = user.uid
            const email = user.email
            const passwordDocRef = doc( db, 'profile', uid )
            const passwordResponse = await getDoc( passwordDocRef )

            if (passwordResponse.exists()) {
                if (passwordResponse.data().password === currentPassword) {
                    if (email !== null) {
                        const credential = EmailAuthProvider.credential( email, currentPassword )
                        reauthenticateWithCredential( user, credential ).then( async () => {
                            await updatePassword( user, newPassword ).then( () => {
                                runTransaction( db, async transaction => {
                                    const passwordDoc = await transaction.get( passwordDocRef )
                                    if (!passwordDoc.exists()) {
                                        throw 'No such a documents!!!'
                                    }
                                    transaction.update( passwordDocRef, { password: newPassword } )
                                    alert( 'Password successfully changed!!!' )
                                } )
                            } ).catch( ( error ) => {
                                alert( error.message )
                            } );
                        } ).catch( ( error ) => {
                            alert( error.message )
                        } );
                    }
                } else {
                    alert( 'Your current password wrong or new passwords don\'t match' )
                }
            }
        }
    }
}

