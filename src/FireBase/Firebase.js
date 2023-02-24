// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5w-1RtANf5o9lEzK7vT7W9rKLsI2Z32c",
  authDomain: "iot-grijalica.firebaseapp.com",
  databaseURL: "https://iot-grijalica-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iot-grijalica",
  storageBucket: "iot-grijalica.appspot.com",
  messagingSenderId: "200252277502",
  appId: "1:200252277502:web:57ca6dbde936a611331baf",
  measurementId: "G-WSZ8KY2N1P",
  databaseURL:"https://iot-grijalica-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);