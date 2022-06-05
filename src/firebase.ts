import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: 'AIzaSyD7fzi_g_l6kd35u3oDQ59Xl2geUz5IJ74',
    authDomain: 'messanger-84de3.firebaseapp.com',
    databaseURL: 'https://messanger-84de3-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'messanger-84de3',
    storageBucket: 'messanger-84de3.appspot.com',
    messagingSenderId: '580607803879',
    appId: '1:580607803879:web:4e3b0c4415a6f4e3493d42',
    measurementId: 'G-23EL2ZP90H'
};

export const app = initializeApp( firebaseConfig );
export const storage = getStorage( app, 'gs://messanger-84de3.appspot.com/' )
export const realDB = getDatabase(app)
export const db = getFirestore( app );
