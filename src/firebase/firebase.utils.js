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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user, it didn\'t work');
        }
    }

    return userRef;
};

//function used to add collections and documents.
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;