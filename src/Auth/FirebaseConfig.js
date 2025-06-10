import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APP_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_APP_ID
  // databaseURL: import.meta.env.VITE_FIREBASE_APP_DATABASE_URL
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Adaptada: retorna la promesa para poder usar await y catch en Login.jsx
export async function createUser(email, password, displayName = "") {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    if (displayName) {
      await updateProfile(user, { displayName });
    }
    return user;
  } catch (error) {
    console.error("Error al crear usuario:", error.code, error.message);
    throw error;
  }
}

export function loginEmailPass(email, password) {
  return(
    new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        console.log("Credenciales:", userCredential);
        const user = userCredential.user;
        console.log("Usuario autenticado:", user);
        resolve(user);
      })
      .catch((error) => {
        // Manejo de errores
        console.error("Error al iniciar sesión:", error.code);
        reject(error);
      });
    })
  )
}