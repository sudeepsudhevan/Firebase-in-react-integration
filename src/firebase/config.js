// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3cGAUUo3UT-XI7KQP9msRkVhwz84suNs",
  authDomain: "test-25b31.firebaseapp.com",
  projectId: "test-25b31",
  storageBucket: "test-25b31.appspot.com",
  messagingSenderId: "66459411888",
  appId: "1:66459411888:web:786de163e7f1b9134b2275",
  measurementId: "G-DYCC6CX53E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
