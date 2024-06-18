// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCifVOohnivO0bt57Op3JqBwOk5h1_lfac",
  authDomain: "log-app-47fd9.firebaseapp.com",
  projectId: "log-app-47fd9",
  storageBucket: "log-app-47fd9.appspot.com",
  messagingSenderId: "505563682105",
  appId: "1:505563682105:web:4ae00b91eeaac2df7244e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;