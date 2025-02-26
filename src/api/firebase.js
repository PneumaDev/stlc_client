// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0pATXO3v-azkIenYeq1HcKly0OuHuzh0",
    authDomain: "stlc-c90ac.firebaseapp.com",
    projectId: "stlc-c90ac",
    storageBucket: "stlc-c90ac.appspot.com",
    messagingSenderId: "574546963865",
    appId: "1:574546963865:web:df62545bda87eec9253708",
    measurementId: "G-3XYZ3YLT2F"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);