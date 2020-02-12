import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHM5_fVH6G6mT3dUc6qXc3TMJRJICQmjw",
    authDomain: "crown-clothings-23bbb.firebaseapp.com",
    databaseURL: "https://crown-clothings-23bbb.firebaseio.com",
    projectId: "crown-clothings-23bbb",
    storageBucket: "crown-clothings-23bbb.appspot.com",
    messagingSenderId: "69612972501",
    appId: "1:69612972501:web:7ca5bf804abbc645e6355c"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();

//   provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
    export default firebase;
