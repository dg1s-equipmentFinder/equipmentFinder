import firebase from 'firebase/compat/app';


const firebaseConfig = {
    apiKey: "AIzaSyDYKqcGAJYUu3LwENz2--Uwy-3SItuD4P8",
    authDomain: "klopp-db.firebaseapp.com",
    projectId: "klopp-db",
    storageBucket: "klopp-db.appspot.com",
    messagingSenderId: "405488807829",
    appId: "1:405488807829:web:6f1e4450c22358a8aa909c",
    measurementId: "G-VDSKYXW0LH",
    databaseURL: "https://klopp-db-default-rtdb.firebaseio.com/"
}

export default firebase.initializeApp(firebaseConfig);