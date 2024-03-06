import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6knvMbXSRjoke3RoPqzzw4yww_zipimA",
  authDomain: "fir-586b0.firebaseapp.com",
  projectId: "fir-586b0",
  storageBucket: "fir-586b0.appspot.com",
  messagingSenderId: "992381683768",
  appId: "1:992381683768:web:585bcf0eee68524ceefecd",
  measurementId: "G-WH9Z3H12PR",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
