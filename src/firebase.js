import firebase from 'firebase'; 

const firebaseConfig = {
  apiKey: "AIzaSyCGejOvJm31bw1UYScd7X0amPUwZGFNuxg",
  authDomain: "whatsapp-clone-d021e.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-d021e.firebaseio.com",
  projectId: "whatsapp-clone-d021e",
  storageBucket: "whatsapp-clone-d021e.appspot.com",
  messagingSenderId: "255597373477",
  appId: "1:255597373477:web:a0c481741d4f2a68b877cc",
  measurementId: "G-3D8VCT8SQF"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
