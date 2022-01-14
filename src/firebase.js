import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB62JtaOMYNoUHGLCGaSbFXrgWZZyJXWGc",
  authDomain: "virtual-plexus-337323.firebaseapp.com",
  projectId: "virtual-plexus-337323",
  storageBucket: "virtual-plexus-337323.appspot.com",
  messagingSenderId: "878328891101",
  appId: "1:878328891101:web:30272867bdef5c4c49fd34"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;