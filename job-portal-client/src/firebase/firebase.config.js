// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeN7STGdMqv04h0C_ftEeEbBDmvU2XXLw",
  authDomain: "job-portal-demo-11950.firebaseapp.com",
  projectId: "job-portal-demo-11950",
  storageBucket: "job-portal-demo-11950.appspot.com",
  messagingSenderId: "478449397204",
  appId: "1:478449397204:web:5c5782c4de1eba64be3a41",
  measurementId: "G-VVD8DH0R9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;