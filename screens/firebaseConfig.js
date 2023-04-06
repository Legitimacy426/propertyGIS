import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAB4F4xIm-zWq2zdD3kh6efb-x8qVn-9Jo",
  authDomain: "propertysearchgis.firebaseapp.com",
  projectId: "propertysearchgis",
  storageBucket: "propertysearchgis.appspot.com",
  messagingSenderId: "648380143209",
  appId: "1:648380143209:web:01de86d038dcd263e174f8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = getFirestore();
const auth = getAuth();
export { firebase, db, auth };
