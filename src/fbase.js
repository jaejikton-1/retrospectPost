import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBBjZ8d4NItswRgO4ch-i12OwvQ6LNZTWk",
  authDomain: "retrospectpost.firebaseapp.com",
  projectId: "retrospectpost",
  storageBucket: "retrospectpost.appspot.com",
  messagingSenderId: "115115406569",
  appId: "1:115115406569:web:ec44d5e78ba68e6a896c78",
  measurementId: "G-2M9Q1G3YL2"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();