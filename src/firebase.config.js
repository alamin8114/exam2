
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDEoDTjtjgGPmmRsRKnV-OBdwYDOFir-T4",
  authDomain: "exam-139a9.firebaseapp.com",
  projectId: "exam-139a9",
  storageBucket: "exam-139a9.firebasestorage.app",
  messagingSenderId: "100606802493",
  appId: "1:100606802493:web:38fcc92ae5b90698628854",
  measurementId: "G-XKWMEQW6ET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app