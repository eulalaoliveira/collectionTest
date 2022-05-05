import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAAa6ZDUtwex0OMNUrhaUoO5tTtMHT6bGM",
    authDomain: "fir-tut-ted-1acfa.firebaseapp.com",
    projectId: "fir-tut-ted-1acfa",
    storageBucket: "fir-tut-ted-1acfa.appspot.com",
    messagingSenderId: "509831374794",
    appId: "1:509831374794:web:155af5cf3c82acbb861133"
};

firebase.initializeApp(firebaseConfig);

export default firebase;