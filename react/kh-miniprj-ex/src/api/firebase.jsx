import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPXUAZu2YO_lZjVMX54TLudbrrKsj-E-0",
  authDomain: "kh-mini-project-322f3.firebaseapp.com",
  projectId: "kh-mini-project-322f3",
  storageBucket: "kh-mini-project-322f3.appspot.com",
  messagingSenderId: "1016150912404",
  appId: "1:1016150912404:web:03d99add2e523332ca7381",
  measurementId: "G-9NXDL076EX",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
