// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKuvJkrLX4FvyfyPZIxyAWabDEDu2engQ",
    authDomain: "react-news-auth-second.firebaseapp.com",
    projectId: "react-news-auth-second",
    storageBucket: "react-news-auth-second.firebasestorage.app",
    messagingSenderId: "62104985219",
    appId: "1:62104985219:web:af834179824968448045b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;