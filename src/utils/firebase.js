import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOb5T9J95Lhpn-1jwOkbGdjqOjQG_howQ",
  authDomain: "todo-89f50.firebaseapp.com",
  projectId: "todo-89f50",
  storageBucket: "todo-89f50.firebasestorage.app",
  messagingSenderId: "955544085650",
  appId: "1:955544085650:web:f172efa4f57af69956f24b",
  measurementId: "G-EGGLS2CV1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const firebaseUtils = { db, auth };

export default firebaseUtils;

