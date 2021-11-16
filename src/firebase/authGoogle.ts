import { firebase } from './firebaseConfig';

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

/* export const loginAuthGoogle = () => {
    const infoUser = firebase.auth().signInWithPopup(googleAuthProvider)
    return infoUser;
} */