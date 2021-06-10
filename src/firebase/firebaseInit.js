import firebase from 'firebase/app'
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBEcQPCKRChmeZZqxPqmC9CCzgGx_OGvYI",
    authDomain: "blog-a42ef.firebaseapp.com",
    projectId: "blog-a42ef",
    storageBucket: "blog-a42ef.appspot.com",
    messagingSenderId: "1022980300308",
    appId: "1:1022980300308:web:eae46e48d2baf4c5231101"
  };
  // Initialize Firebase
  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const timestap= firebase.firestore.FieldValue.serverTimestamp

  export {timestap}

  export default firebaseApp.firestore()