// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyA0kx4Pzqcv1tFQE2MCdBrFqRY0yqCEV7Y",
  authDomain: "checklist-obori.firebaseapp.com",
  databaseURL: "https://checklist-obori-default-rtdb.firebaseio.com",
  projectId: "checklist-obori",
  storageBucket: "checklist-obori.firebasestorage.app",
  messagingSenderId: "534593148289",
  appId: "1:534593148289:web:48ac6258aab4b9225cc480",
  measurementId: "G-XJMVYE6PHN"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
