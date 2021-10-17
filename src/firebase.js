import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjZHoiFNng17ZiEq0w8XmqTlmZIcELvqU",
  authDomain: "clone-426a5.firebaseapp.com",
  projectId: "clone-426a5",
  storageBucket: "clone-426a5.appspot.com",
  messagingSenderId: "205471618843",
  appId: "1:205471618843:web:f22e7a9e302bd8dd1c65be",
  measurementId: "G-431JRHTYTX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
