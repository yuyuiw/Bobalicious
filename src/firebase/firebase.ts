// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth as firebaseGetAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARNtfyssecTtDSUE1cSb76Kir4LBW2UVQ",
  authDomain: "bobalicious-78b3b.firebaseapp.com",
  projectId: "bobalicious-78b3b",
  storageBucket: "bobalicious-78b3b.firebasestorage.app",
  messagingSenderId: "82701198048",
  appId: "1:82701198048:web:b53aa288e06c710d072685",
  measurementId: "G-FM6W5B321S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

function getAuth(app: FirebaseApp) {
  return firebaseGetAuth(app);
}

