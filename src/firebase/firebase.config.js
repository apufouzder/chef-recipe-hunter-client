// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5PSXTgwRA4WCX0hgUL3kNU4DqW3cPuNg",
  authDomain: "tasty-chef-bde0b.firebaseapp.com",
  projectId: "tasty-chef-bde0b",
  storageBucket: "tasty-chef-bde0b.appspot.com",
  messagingSenderId: "514247154678",
  appId: "1:514247154678:web:0f1173161e8c15880c05d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;