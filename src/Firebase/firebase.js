
import { firebase } from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCtyuu-RGWZiDODFp7H0yTnKgiL1jRAvI0",
  authDomain: "bendita-sucu.firebaseapp.com",
  projectId: "bendita-sucu",
  storageBucket: "bendita-sucu.appspot.com",
  messagingSenderId: "463436011163",
  appId: "1:463436011163:web:013fc71b12e9a57caf983e",
  measurementId: "G-J6ZSVX2E8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function getFirestore (){

    return firebase.firestore(app)

}