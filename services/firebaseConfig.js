// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { firestore } from "firebase/firestore";
// // Initialize Firebase
// export const firebaseConfig = {
//   apiKey: "AIzaSyA_QlC2cPSTprTbDncg4jDjJpYydLwXbCk",
//   authDomain: "minii-ur-8b921.firebaseapp.com",
//   projectId: "minii-ur-8b921",
//   storageBucket: "minii-ur-8b921.appspot.com",
//   messagingSenderId: "397890945298",
//   appId: "1:397890945298:web:1d2906a1f2786ad3d033cb",
//   measurementId: "G-46PMV1Y4JW",
// };

// const app = initializeApp(firebaseConfig);
// // Initialize Cloud Firestore and get a reference to the service
// export const auth = getAuth(app);
// // export const firestore = getFirestore(app);
// export const getNews = () => {
//   const newsRef = collection(db, "news");
//   return getDocs(newsRef);
// };

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVMNqCEeYLsjBF01ZWBRy9sUqMTHudw7I",
  authDomain: "instagram-a282c.firebaseapp.com",
  projectId: "instagram-a282c",
  storageBucket: "instagram-a282c.appspot.com",
  messagingSenderId: "913020369140",
  appId: "1:913020369140:web:a5497b855fd77d955b86a1",
  measurementId: "G-N186DFC8TP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("FIREBASE CONFIG", auth);
