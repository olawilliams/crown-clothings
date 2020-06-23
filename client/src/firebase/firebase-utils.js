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
  
  firebase.initializeApp(firebaseConfig);

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

  export const getUserCartRef = async userId => {
    const cartRef = firestore.collection('carts').where('userId', "==", userId);

    const cartSnapshot = await cartRef.get();
    if(cartSnapshot.empty) {
      const cartDocRef = firestore.collection('carts').doc();
       await cartDocRef.set({userId, cartItem: []});
       return cartDocRef
    } else {
      return cartSnapshot.docs[0].ref
    }
  };

  export const getUserOrderRef = async userId => {
    const orderRef = firestore.collection('orders').where('userId', "==", userId);
    const orderSnapshot =  await orderRef.get();

    if(orderSnapshot.empty) {
      const orderDocRef = firestore.collection('orders').doc();
      orderDocRef.set({ userId, order: []})
      return orderDocRef
    } else {
      return orderSnapshot.docs[0].ref
    }
  }

  export const addCollectionAndDocument = async (CollectionKey, objectToAdd) => {
    const collectionRef= firestore.collection(CollectionKey);

    const batch = firestore.batch();

    objectToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collections ) => {
    const transformedCollections = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return {
        routeName : encodeURI(title.toLowerCase()),
        id : doc.id,
        title,
        items        
      }
    });
   return  transformedCollections.reduce((accumulator, collection) => {
     accumulator[collection.title.toLowerCase()] = collection;
     return accumulator;
   }, {})
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)}
  )};
  
  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  googleProvider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
  
    export default firebase;


    
 