// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Agregada la importación faltante
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlkGHh6-7wtG-tWIeA7GCWeNuYA4QOvNs",
  authDomain: "miapp-integral-b2178.firebaseapp.com",
  projectId: "miapp-integral-b2178",
  storageBucket: "miapp-integral-b2178.firebasestorage.app",
  messagingSenderId: "370514766251",
  appId: "1:370514766251:web:f715b6a914ece3a899caee",
  measurementId: "G-F7ZKKZKPVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);