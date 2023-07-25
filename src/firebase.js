import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBKlA2SUctFNerhDIX4Ty3fd8Li7aNGLyw",
    authDomain: "linkedin-clone-yt-9bfcb.firebaseapp.com",
    projectId: "linkedin-clone-yt-9bfcb",
    storageBucket: "linkedin-clone-yt-9bfcb.appspot.com",
    messagingSenderId: "753201233722",
    appId: "1:753201233722:web:0ad61159f46e6e8a1c5a03",
    measurementId: "G-J3Z5KGMRVY"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };