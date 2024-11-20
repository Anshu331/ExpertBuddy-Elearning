import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCG0LONrrHi0ee5vQ_NUBUXvxKBESl3rFM",
  authDomain: "golden-legend-379814.firebaseapp.com",
  projectId: "golden-legend-379814",
  storageBucket: "golden-legend-379814.firebasestorage.app",
  messagingSenderId: "990552661322",
  appId: "1:990552661322:web:9815dbf5606cee3c67b5b3",
  measurementId: "G-S6RVKMMVTY"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;