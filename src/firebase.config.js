import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiT-isiJe7EOKTUfz-aktZtIpC5-bF3_Q",
  authDomain: "house-marketplace-app-9af6e.firebaseapp.com",
  projectId: "house-marketplace-app-9af6e",
  storageBucket: "house-marketplace-app-9af6e.appspot.com",
  messagingSenderId: "508383776556",
  appId: "1:508383776556:web:8584091ae8a3e8f286e689"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
