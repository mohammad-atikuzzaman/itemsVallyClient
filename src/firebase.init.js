// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDowd9qlHiSsm4WDDSQv-7nCjtpb6vjIV4",
  authDomain: "itemsvally.firebaseapp.com",
  projectId: "itemsvally",
  storageBucket: "itemsvally.appspot.com",
  messagingSenderId: "747229940212",
  appId: "1:747229940212:web:3b0302a7aa8a696bf291a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
