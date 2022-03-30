// Import the functions you need from the SDKs you need
import { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOl1_JV63z2ioSjSboroVpjjFgQ0zdYEY",
  authDomain: "eventmanager-development.firebaseapp.com",
  projectId: "eventmanager-development",
  storageBucket: "eventmanager-development.appspot.com",
  messagingSenderId: "61691355494",
  appId: "1:61691355494:web:448607fc7a8494d64c28a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);

}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);

}

export function logout() {
  
   return signOut(auth);
}

// custom hook
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
      return unsub;
    }, []);

    return currentUser;
}

