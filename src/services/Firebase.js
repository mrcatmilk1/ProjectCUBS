// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8nWDpJdYEFGw23qYyrHNhb6pb9OGmJc4",
    authDomain: "fir-crud-d35a8.firebaseapp.com",
    databaseURL: "https://fir-crud-d35a8-default-rtdb.firebaseio.com",
    projectId: "fir-crud-d35a8",
    storageBucket: "fir-crud-d35a8.appspot.com",
    messagingSenderId: "1006099546197",
    appId: "1:1006099546197:web:36ab90946315043c3714dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);