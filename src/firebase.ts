import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA3qFyi_JRji8TY2UqUCkXF7TA55vpZI10",
  authDomain: "training-note-c5244.firebaseapp.com",
  projectId: "training-note-c5244",
  storageBucket: "training-note-c5244.appspot.com",
  messagingSenderId: "149357469424",
  appId: "1:149357469424:web:99a821bb583eda83d72c35",
  measurementId: "G-5WC2452TBR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};