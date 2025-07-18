import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APP_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_APP_ID,
  /* databaseURL: import.meta.env.VITE_FIREBASE_APP_DATABASE_URL */
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

/* Adaptada: retorna la promesa para poder usar await y catch en Login.jsx */
export async function createUser(email, password, displayName = "") {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    if (displayName) {
      await updateProfile(user, { displayName });
    }
    return userCredential;
  } catch (error) {
    console.error("Error al crear usuario:", error.code, error.message);
    throw error;
  }
}

export function loginEmailPass(email, password) {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        const userData = userCredential.user;
        console.log("Usuario autenticado:", userData);
        resolve(userData);
      })
      .catch((error) => {
        // Manejo de errores
        console.error("Error al iniciar sesión:", error.code);
        reject(error);
      });
  });
}


/* PEDIDOS FIREBASE */
export async function guardarPedido(productosIds, estado = "pendiente", total) {
  if (!auth.currentUser) throw new Error("Usuario no autenticado");

  const pedido = {
    userEmail: auth.currentUser.email,
    products: productosIds,
    date: serverTimestamp(),
    state: estado,
    total: Number(total)
  };

  await addDoc(collection(db, "pedidos"), pedido);
}

export async function obtenerPedidosUsuario() {
  const user = auth.currentUser;
  if (!user) return [];

  const db = getFirestore();
  const pedidosRef = collection(db, "pedidos");
  const q = query(pedidosRef, where("userEmail", "==", user.email));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
/* PEDIDOS FIREBASE */

/* RESERVAS FIREBASE */
export async function guardarReserva(nameUser, peopleNumber, dateOrder, estado, total) {
  if (!auth.currentUser) throw new Error("Usuario no autenticado");

  const reserva = {

    name: nameUser,
    people: peopleNumber,
    date: dateOrder,
    state: estado,
    total: Number(total),
    email: auth.currentUser.email
  };

  await addDoc(collection(db, "reservas"), reserva);
}

export async function obtenerReservasUsuario() {
  const user = auth.currentUser;
  if (!user) return [];

  const db = getFirestore();
  const pedidosRef = collection(db, "reservas");
  const q = query(pedidosRef, where("email", "==", user.email));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
/* RESERVAS FIREBASE */

/* DIRECCIONES FIREBASE */
export async function guardarDireccion(nombre, direccion1, direccion2, ciudad, localidad, postal) {
  if (!auth.currentUser) throw new Error("Usuario no autenticado");

  const reserva = {

    name: nombre,
    address1: direccion1,
    address2: direccion2,
    city: ciudad,
    state: localidad,
    zip: postal,
    email: auth.currentUser.email,
  };

  await addDoc(collection(db, "direcciones"), reserva);
}

export async function obtenerDireccionUsuario() {
  const user = auth.currentUser;
  console.log("Usuario actual:", user);
  if (!user) return [];

  const db = getFirestore();
  const pedidosRef = collection(db, "direcciones");
  const q = query(pedidosRef, where("email", "==", user.email));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
/* DIRECCIONES FIREBASE */
