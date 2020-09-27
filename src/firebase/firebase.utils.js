import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "myshop-db-1b6b9.firebaseapp.com",
  databaseURL: "https://myshop-db-1b6b9.firebaseio.com",
  projectId: "myshop-db-1b6b9",
  storageBucket: "myshop-db-1b6b9.appspot.com",
  messagingSenderId: "987153241576",
  appId: "1:987153241576:web:3c40833ead48bc0199005d",
  measurementId: "G-BB46WCDRZ4",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    await userRef
      .set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
      .catch((error) => {
        console.log("error creating user", error.message);
      });
  }
  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
