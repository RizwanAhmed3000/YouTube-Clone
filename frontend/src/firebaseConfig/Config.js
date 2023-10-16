import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCracmuABkGhpzy0SmUOjyyWchi7DQGgM4",
    authDomain: "video-sharing-app-f4318.firebaseapp.com",
    projectId: "video-sharing-app-f4318",
    storageBucket: "video-sharing-app-f4318.appspot.com",
    messagingSenderId: "830826424492",
    appId: "1:830826424492:web:8316c120db673c7a0ed709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { app, auth, provider, storage, ref, uploadBytesResumable, getDownloadURL }