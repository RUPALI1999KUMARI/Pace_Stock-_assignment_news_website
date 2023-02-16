// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getauth} from "firebase/auth";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC9UEP3CGmHPbxU5ga8U6wGFaI8PbVB8RE",
  authDomain: "newswebsite-be640.firebaseapp.com",
  projectId: "newswebsite-be640",
  storageBucket: "newswebsite-be640.appspot.com",
  messagingSenderId: "929088135590",
  appId: "1:929088135590:web:344664e8933a1587236f67",
  measurementId: "G-BY1RVKQ7NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getauth()

export {app,auth}

 