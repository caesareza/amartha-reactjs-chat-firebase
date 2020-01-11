import firebase from 'firebase/app';
import "firebase/auth";

const konfigNya = {
    apiKey: "AIzaSyBhERIl0cGA4W12DVZU_8mi7MROgzxJKAw",
    authDomain: "amartha-97347.firebaseapp.com",
    databaseURL: "https://amartha-97347.firebaseio.com",
    projectId: "amartha-97347",
    storageBucket: "amartha-97347.appspot.com",
    messagingSenderId: "1072986660918",
    appId: "1:1072986660918:web:ad25bed8c2f7c91740f897"
}

firebase.initializeApp(konfigNya);

export default firebase;
