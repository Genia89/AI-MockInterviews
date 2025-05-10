// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUkpaSZzR5rtJeEcsvgU6uccD0CzdPPWM",
    authDomain: "mockmate-660f7.firebaseapp.com",
    projectId: "mockmate-660f7",
    storageBucket: "mockmate-660f7.firebasestorage.app",
    messagingSenderId: "114135601451",
    appId: "1:114135601451:web:1f43de960b7ef38a9d356e",
    measurementId: "G-FEW4SS1WCX"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);