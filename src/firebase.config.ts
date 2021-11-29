import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCyloujzWxjUl-lIgfgDQtjK7gDJtgw_9o",
    authDomain: "date-a-life.firebaseapp.com",
    projectId: "date-a-life",
    storageBucket: "date-a-life.appspot.com",
    messagingSenderId: "1051624986544",
    appId: "1:1051624986544:web:bd86e953b635be22e6e875",
    measurementId: "G-9D4R94ZVYB",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const fbStorage = getStorage(firebaseApp);
const timestamp = serverTimestamp();

export { fbStorage, timestamp, firebaseApp };
