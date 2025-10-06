// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD84DpSshw6_VDkkUoLVEmgBu-n0UZbvD4",
  authDomain: "interviewmaster-35d94.firebaseapp.com",
  projectId: "interviewmaster-35d94",
  storageBucket: "interviewmaster-35d94.firebasestorage.app",
  messagingSenderId: "1027916686789",
  appId: "1:1027916686789:web:2a9774e439aa87f04417ac",
  measurementId: "G-1R7J8KJLMS"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);