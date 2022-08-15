// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_A5ggNJ3Fq001ffNAJTSKY2BIh5JEniw",
    authDomain: "ema-john-simple-8b00f.firebaseapp.com",
    projectId: "ema-john-simple-8b00f",
    storageBucket: "ema-john-simple-8b00f.appspot.com",
    messagingSenderId: "103211486995",
    appId: "1:103211486995:web:66b2dee540d2c4956b14e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;