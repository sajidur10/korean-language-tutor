// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIwMOtrxuiLi1PAOnnJAQN1uRIHe43eK8",
  authDomain: "independent-service-prov-61b22.firebaseapp.com",
  projectId: "independent-service-prov-61b22",
  storageBucket: "independent-service-prov-61b22.appspot.com",
  messagingSenderId: "1090267938867",
  appId: "1:1090267938867:web:ae0e9cd936cb92037e2346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
