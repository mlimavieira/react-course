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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;