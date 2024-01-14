import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDsMsvWfyXnPAh6UZrIvwuIiVuwKozqUXk",
  authDomain: "project-71-7cdab.firebaseapp.com",
  projectId: "project-71-7cdab",
  storageBucket: "project-71-7cdab.appspot.com",
  messagingSenderId: "948289017088",
  appId: "1:948289017088:web:8cbfc146917caf3ff28fe5",
  measurementId: "G-FH7NNL43X8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
