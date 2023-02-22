import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCH8rnUXg_zvueGR-Bf6F_ayvCu-qspgFo",
    authDomain: "ilkwak-equipmentfinder.firebaseapp.com",
    databaseURL: "https://ilkwak-equipmentfinder-default-rtdb.firebaseio.com",
    projectId: "ilkwak-equipmentfinder",
    storageBucket: "ilkwak-equipmentfinder.appspot.com",
    messagingSenderId: "193599558603",
    appId: "1:193599558603:web:ce821a98fb7232da711c4e",
    measurementId: "G-Z61NKPXLGY"
  };

const app = firebase.initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getDatabase(app);

export {auth, db};
