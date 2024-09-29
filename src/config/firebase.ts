// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzebD8AMgljRoOtBOVX5ytW-oezizX_n0",
  authDomain: "todo-app-bb1f2.firebaseapp.com",
  projectId: "todo-app-bb1f2",
  storageBucket: "todo-app-bb1f2.appspot.com",
  messagingSenderId: "531756753262",
  appId: "1:531756753262:web:ddac38e2c55c74e7a1a17f",
  measurementId: "G-DZESDTFG44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

