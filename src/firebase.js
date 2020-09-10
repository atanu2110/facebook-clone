import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAjg0mbQ85_BpiQXBH4Oq-LnWqmrOSCyMw",
  authDomain: "facebook-clone-cca13.firebaseapp.com",
  databaseURL: "https://facebook-clone-cca13.firebaseio.com",
  projectId: "facebook-clone-cca13",
  storageBucket: "facebook-clone-cca13.appspot.com",
  messagingSenderId: "211881523409",
  appId: "1:211881523409:web:ff57ff183d59b4f1e16df0",
  measurementId: "G-8CCQ8QTEV1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;