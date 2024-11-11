// src/config/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';  // Import getStorage

const firebaseConfig = {
    apiKey: "AIzaSyBM1a4uyulyrw7KxIZbFbHzayCaHPMeviQ",
    authDomain: "atlega-users.firebaseapp.com",
    projectId: "atlega-users",
    storageBucket: "atlega-users.firebasestorage.app", // Corrected storageBucket format
    messagingSenderId: "330405100575",
    appId: "1:330405100575:web:da4258ef6e9c198452692a",
    measurementId: "G-QQD0MSM49E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);  // Initialize and export Firebase Storage
export default app;
