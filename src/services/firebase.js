import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import useElHuequito from "../hooks/useElHuequito";

const firebaseConfig = {
  apiKey: "AIzaSyAMTa8o1ESTinlMpORM90hUe9pRZlnNUF8",
  authDomain: "el-huequito-85a45.firebaseapp.com",
  projectId: "el-huequito-85a45",
  storageBucket: "el-huequito-85a45.firebasestorage.app",
  messagingSenderId: "977205799187",
  appId: "1:977205799187:web:074d9429c6a0c8006212e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)