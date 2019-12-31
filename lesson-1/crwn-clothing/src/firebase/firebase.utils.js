import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyB4pTpG7kORLhg6694WYlMU_g5y3fusw-w",
  authDomain: "crwn-db-9e879.firebaseapp.com",
  databaseURL: "https://crwn-db-9e879.firebaseio.com",
  projectId: "crwn-db-9e879",
  storageBucket: "crwn-db-9e879.appspot.com",
  messagingSenderId: "642625760679",
  appId: "1:642625760679:web:6c89b8d52d34b665a65a82",
  measurementId: "G-96X17M41P2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createAt = new Date();

    try {

      await userRef.set({displayName, email, createAt, ...additionalData});

    } catch(error) {
      console.log('Error creating user: ', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;