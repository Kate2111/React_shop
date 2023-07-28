import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification,  signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyCQrrr1d9MKrS94emnqUqKuOiq0K_BoEWM",
    authDomain: "myreactshop-c5f21.firebaseapp.com",
    databaseURL: "https://myreactshop-c5f21-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myreactshop-c5f21",
    storageBucket: "myreactshop-c5f21.appspot.com",
    messagingSenderId: "860055452807",
    appId: "1:860055452807:web:bdf7710c0a479e1c3b4c22",
    measurementId: "G-DF1L59PSJM"
};

  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUpUser = (email, password) => {
    try{
        createUserWithEmailAndPassword(auth, email, password);
        sendEmailVerification(auth.currentUser);
    } catch(err) {
        console.log(err)
    }
}

export const logInUser = (email, password) => {
    try{
        signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        console.log(err)
    }
}

export const signOutUser = () => {
    try{
        signOut(auth)
    } catch (err) {
        console.log(err)
    }
}

export const passwordReset = (email) => {
    try {
        sendPasswordResetEmail(auth, email)
    } catch (err) {
        console.log(err)
    }
}


