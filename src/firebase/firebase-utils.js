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
  }

  export const createUserProfileDocument =  async  (userAuth, additionalData ) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot =  await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;

  }

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
    export default firebase;


    
 