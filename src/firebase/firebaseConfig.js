import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrYafSamVhz5K7UwzhRdIOMqBBiqZm8zY",
    authDomain: "superedings.firebaseapp.com",
    projectId: "superedings",
    storageBucket: "superedings.appspot.com",
    messagingSenderId: "66673672293",
    appId: "1:66673672293:web:b6bbebc8c281804b53c68c",
    measurementId: "G-VH7X479FCN"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/* Autenticación con google */

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const loginAuthGoogle = () => {
    const dataGoogle = firebase.auth().signInWithPopup(googleAuthProvider)
    return dataGoogle;
}


/****************************/

export {
    db,
    googleAuthProvider,
    firebase
}
