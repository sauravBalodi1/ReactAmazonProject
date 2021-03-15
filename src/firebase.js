import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrDZr_DaTkB-G3Hf2VMFGnOlbB67jglAw",
    authDomain: "project-9a751.firebaseapp.com",
    projectId: "project-9a751",
    storageBucket: "project-9a751.appspot.com",
    messagingSenderId: "951294210549",
    appId: "1:951294210549:web:fc7be174e6997c0737f0bc",
    measurementId: "G-PQ9X6YG3LG"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth=firebase.auth();
  export {db,auth};
