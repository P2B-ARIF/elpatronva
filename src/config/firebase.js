import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDzyg8RZowUEHOcWzwfwkcm_FDKAJcPVq4",
	authDomain: "elpatronva-6eb64.firebaseapp.com",
	projectId: "elpatronva-6eb64",
	storageBucket: "elpatronva-6eb64.appspot.com",
	messagingSenderId: "440373937035",
	appId: "1:440373937035:web:0e73766e6a023b3dde658e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
