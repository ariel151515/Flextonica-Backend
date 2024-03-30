// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDesCmuAMOPoe719IueBWyv2YIa99gszyU",
  authDomain: "flextonica-227f5.firebaseapp.com",
  projectId: "flextonica-227f5",
  storageBucket: "flextonica-227f5.appspot.com",
  messagingSenderId: "331315827582",
  appId: "1:331315827582:web:1aabee471d80ccdcdd592f",
  measurementId: "G-L4RRKRCQJC"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 export default app;
 