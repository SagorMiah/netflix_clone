import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCTgTanaeTdEeJw6CGxa7DGOviPTxYswv4",
  authDomain: "netflix-clone-27b52.firebaseapp.com",
  projectId: "netflix-clone-27b52",
  storageBucket: "netflix-clone-27b52.appspot.com",
  messagingSenderId: "457340064186",
  appId: "1:457340064186:web:9c9e52d67e911817080d83",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
