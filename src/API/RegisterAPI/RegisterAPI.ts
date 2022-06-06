import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import defaultImage from '../../assets/user.png';

export const RegisterAPI = {
    signUp: (email: string, password: string, fullname: string, phone: string, country: string, gender: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const uid = userCredential.user.uid
                await setDoc(doc(db, 'profile', uid), {
                    echo: false,
                    noise: false,
                    voice: false,
                    slack: '',
                    twitter: '',
                    facebook: '',
                    github: '',
                    instagram: '',
                    name: fullname,
                    gender: gender,
                    status: '',
                    id: uid,
                    email: email,
                    photo: defaultImage,
                    bio: '',
                    phone: phone,
                    country: country,
                    password: password,
                    darkMode: false,
                    friends: [],
                })
            })
            .catch((error) => {
                alert(error.message)
            });
    }
}