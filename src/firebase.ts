// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAvwV-O7r7bgvvMvqtqS6EEKsnwJzKPDac",

  authDomain: "twitter-gpt-b6f5d.firebaseapp.com",

  projectId: "twitter-gpt-b6f5d",

  storageBucket: "twitter-gpt-b6f5d.appspot.com",

  messagingSenderId: "109313406580",

  appId: "1:109313406580:web:9b50a13bc3f765af30c321",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
