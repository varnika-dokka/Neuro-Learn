// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUSeDAVHcde5PH3_cnZAJhVY8W54KU1Ng",
  authDomain: "neurolearn-draft2.firebaseapp.com",
  databaseURL: "https://neurolearn-draft2-default-rtdb.firebaseio.com/",
  projectId: "neurolearn-draft2",
  storageBucket: "neurolearn-draft2.firebasestorage.app",
  messagingSenderId: "388862448354",
  appId: "1:388862448354:web:aa688df89f9180d164c4bb",
  measurementId: "G-EL6KE891VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);