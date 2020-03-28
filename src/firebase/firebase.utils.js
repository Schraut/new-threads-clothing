import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4h72x0AiuP0WN6JFwCJWH1LZWytrrmC4",
    authDomain: "new-threads-clothing.firebaseapp.com",
    databaseURL: "https://new-threads-clothing.firebaseio.com",
    projectId: "new-threads-clothing",
    storageBucket: "new-threads-clothing.appspot.com",
    messagingSenderId: "473984757986",
    appId: "1:473984757986:web:df669a12c86ddd56b5aebb"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoolge = () => auth.signInWithPopup(provider);

export default firebase;