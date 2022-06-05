import {
    browserLocalPersistence,
    browserSessionPersistence,
    getAuth,
    setPersistence,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from 'firebase/auth';

export const LoginAPI = {
    signIn: async (email: string, password: string) => {
        const auth = getAuth()
        return  await signInWithEmailAndPassword( auth, email, password )
            .then( () => {
                return true
            } )
            .catch( ( error ) => {
                alert( error.message )
                return false
            } );
    },
    setRememberMe: async (checkbox: boolean, email: string, password: string) => {
        const auth = getAuth();
        const persistence = checkbox ? browserLocalPersistence : browserSessionPersistence
        return await setPersistence( auth, persistence )
            .then( () => {
                return LoginAPI.signIn( email, password )
            } )
            .catch( ( error ) => {
                alert(error.message)
            } );
    },
    resetPassword: (email: string) => {
        const auth = getAuth();
        return sendPasswordResetEmail(auth, email)
            .then(() => {
                return true
            })
            .catch((error) => {
                alert(error.message)
                return false
            });
    }
}