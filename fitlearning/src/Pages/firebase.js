// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD86Rwy1oDjkiAvYKSDo55SvXhNxARzQUE",
  authDomain: "aws-fitlearning.firebaseapp.com",
  projectId: "aws-fitlearning",
  storageBucket: "aws-fitlearning.appspot.com",
  messagingSenderId: "372431024684",
  appId: "1:372431024684:web:cecdc1c6882ba3e0241789",
  measurementId: "G-P72SEPPVBP"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
