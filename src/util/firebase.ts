// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG5sPAXNz06UVLq_Jjef-2Gk2Rzmxj5yk",
  authDomain: "scribble-156ac.firebaseapp.com",
  projectId: "scribble-156ac",
  storageBucket: "scribble-156ac.appspot.com",
  messagingSenderId: "582161944117",
  appId: "1:582161944117:web:2cd85dd407d6da5b362b7c"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const googleAuth = new GoogleAuthProvider()