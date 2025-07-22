// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcQ3zVSUvpAHucYGNe_RcsX5L6LS0WopI",
  authDomain: "react-crud-e6d78.firebaseapp.com",
  projectId: "react-crud-e6d78",
  storageBucket: "react-crud-e6d78.firebasestorage.app",
  messagingSenderId: "1049529082301",
  appId: "1:1049529082301:web:1b99a2e8729b1aed2372d4",
  measurementId: "G-Y4V87KDECY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDb = getFirestore(app)