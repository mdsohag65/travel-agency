// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3gtygR6-DCuiB7R_QAX3MS4ERTKcrEv8",
    authDomain: "travel-agency-ab8d8.firebaseapp.com",
    projectId: "travel-agency-ab8d8",
    storageBucket: "travel-agency-ab8d8.appspot.com",
    messagingSenderId: "1084348676409",
    appId: "1:1084348676409:web:c0939479002426e1d410e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;