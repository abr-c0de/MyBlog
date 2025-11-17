import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAo-x5LHakUsqKzefDVNsWZ7FlCX3ucEaE",
  authDomain: "myblog-79e1c.firebaseapp.com",
  projectId: "myblog-79e1c",
  storageBucket: "myblog-79e1c.appspot.com",
  messagingSenderId: "457298498260",
  appId: "1:457298498260:web:961a006d4e3ba79ef36141"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);