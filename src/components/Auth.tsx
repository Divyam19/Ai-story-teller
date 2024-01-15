// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhVHmnQOZ9CHUGkuLe4SNgLQU_zymTuQs",
  authDomain: "ai-story-teller-d0d79.firebaseapp.com",
  projectId: "ai-story-teller-d0d79",
  storageBucket: "ai-story-teller-d0d79.appspot.com",
  messagingSenderId: "762773636379",
  appId: "1:762773636379:web:1a5dd4b7a36362512a7fbe",
  measurementId: "G-PDQLTX761V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export default{auth,provider};

