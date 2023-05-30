import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBlN0tJ2WGEfxKiC5liEJKQQmiisVz10rM",
    authDomain: "teamfour-e4fee.firebaseapp.com",
    projectId: "teamfour-e4fee",
    storageBucket: "teamfour-e4fee.appspot.com",
    messagingSenderId: "189291944441",
    appId: "1:189291944441:web:db8083bf26d1f44326c528"
  };

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth= getAuth (FirebaseApp);
export const FirebaseDB = getFirestore (FirebaseApp)

