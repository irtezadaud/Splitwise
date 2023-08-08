import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBxWgSwYTyxheBRauQiKAZzm7gBB4dM_kE",
  authDomain: "ecommerce-template-rrf.firebaseapp.com",
  databaseURL: "https://ecommerce-template-rrf.firebaseio.com",
  projectId: "ecommerce-template-rrf",
  storageBucket: "ecommerce-template-rrf.appspot.com",
  messagingSenderId: "273073246740",
  appId: "1:273073246740:web:9fabb3aa798fa493554d01",
  measurementId: "G-GZRTSDHJ0P"
};
firebase.initializeApp(config);

export default firebase;
