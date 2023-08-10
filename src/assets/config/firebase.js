// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpihDRRsliYO_sNZ7RLYJbgxdZ7Wg_IIM",
  authDomain: "apprestobar-abd14.firebaseapp.com",
  projectId: "apprestobar-abd14",
  storageBucket: "apprestobar-abd14.appspot.com",
  messagingSenderId: "1027782778107",
  appId: "1:1027782778107:web:1f817ae873e0bef4afa45e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
