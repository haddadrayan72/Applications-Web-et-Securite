import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD86Rwy1oDjkiAvYKSDo55SvXhNxARzQUE",
  authDomain: "aws-fitlearning.firebaseapp.com",
  databaseURL: "https://aws-fitlearning-default-rtdb.firebaseio.com",
  projectId: "aws-fitlearning",
  storageBucket: "aws-fitlearning.appspot.com",
  messagingSenderId: "372431024684",
  appId: "1:372431024684:web:cecdc1c6882ba3e0241789",
  measurementId: "G-P72SEPPVBP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);