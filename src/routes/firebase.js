// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCp9Mza6aT2ulIqHKs6fOlTXJCdIs8a3G4",
    authDomain: "react-2022-f99e6.firebaseapp.com",
    projectId: "react-2022-f99e6",
    storageBucket: "react-2022-f99e6.appspot.com",
    messagingSenderId: "599599704997",
    appId: "1:599599704997:web:f5fd6c704f427fceb2564c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };