import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA_QlC2cPSTprTbDncg4jDjJpYydLwXbCk",
  authDomain: "minii-ur-8b921.firebaseapp.com",
  projectId: "minii-ur-8b921",
  storageBucket: "minii-ur-8b921.appspot.com",
  messagingSenderId: "397890945298",
  appId: "1:397890945298:web:1d2906a1f2786ad3d033cb",
  measurementId: "G-46PMV1Y4JW",
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const getNews = () => {
  const newsRef = collection(db, "news");
  return getDocs(newsRef);
};

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
