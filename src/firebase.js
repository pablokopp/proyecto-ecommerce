import firebase from "firebase/app";
import "@firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyDXJU0XWrMDk0YEyG-IgidvJkU8ITw7r2k",
    authDomain: "miplacard-database.firebaseapp.com",
    projectId: "miplacard-database",
    storageBucket: "miplacard-database.appspot.com",
    messagingSenderId: "608788812336",
    appId: "1:608788812336:web:7366b28e502ca62c8e93f5"
  };

  const fb = !firebase.apps.lenght ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export const productosCollection = firebase.firestore(fb).collection('productos')