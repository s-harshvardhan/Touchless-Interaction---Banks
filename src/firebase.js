import { initializeApp } from "@firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcYl19sW8Q8mtR9tHhp-NDzw06OO1TJGc",
  authDomain: "touchless-hci-new.firebaseapp.com",
  databaseURL: "https://touchless-hci-new-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "touchless-hci-new",
  storageBucket: "touchless-hci-new.appspot.com",
  messagingSenderId: "196445127990",
  appId: "1:196445127990:web:4485db0dae40d661d45f97",
  measurementId: "G-KCKBXMFVQY"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;