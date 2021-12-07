import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDPO7rRhmTnUYhDxghyGAGc9chUtCYI7E",
  authDomain: "techno-stuff.firebaseapp.com",
  projectId: "techno-stuff",
  storageBucket: "techno-stuff.appspot.com",
  messagingSenderId: "218216938982",
  appId: "1:218216938982:web:b888b317559be56c3cea27",
  measurementId: "G-YKLJDKBWJ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
