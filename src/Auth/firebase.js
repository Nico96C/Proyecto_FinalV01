import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlhFaJbO273o5Y-VkUJ9kL2yw2xHAKn5s",
  authDomain: "auth-test-e2b2c.firebaseapp.com",
  projectId: "auth-test-e2b2c",
  storageBucket: "auth-test-e2b2c.firebasestorage.app",
  messagingSenderId: "545857746081",
  appId: "1:545857746081:web:2d6a57723c403dba11ece0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Adaptada: retorna la promesa para poder usar await y catch en Login.jsx
export function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}