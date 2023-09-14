import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDl9WTlVWuRiSl3YyyFePVx6K7gsreMthY",
  authDomain: "registro-1c68a.firebaseapp.com",
  databaseURL: "https://registro-1c68a-default-rtdb.firebaseio.com",
  projectId: "registro-1c68a",
  storageBucket: "registro-1c68a.appspot.com",
  messagingSenderId: "912712878932",
  appId: "1:912712878932:web:96ea09609f2472907e16c1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();