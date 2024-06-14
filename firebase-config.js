// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTlJvITU1ENo23YYCACc2O5GlwkeROGWE",
  authDomain: "visionapp-c532f.firebaseapp.com",
  projectId: "visionapp-c532f",
  storageBucket: "visionapp-c532f.appspot.com",
  messagingSenderId: "340789390854",
  appId: "1:340789390854:web:7605af579bebb21717dd87",
  measurementId: "G-LJ14GN15P3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
