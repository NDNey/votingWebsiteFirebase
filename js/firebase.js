// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";

import { getDatabase, ref, update, increment, onValue } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "apiKey-",
  authDomain: "authDomain ",
  databaseURL: "databaseURL",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId ",
  appId: "appId ",
  measurementId: "measurementId",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const voteCount = ref(db, "cartoons/");

console.log("hi", voteCount);

function updateVotes(id) {
  const updates = {};
  updates[`cartoons/${id}/votes`] = increment(1);
  updates[`cartoons/totalVotes`] = increment(1);

  update(ref(db), updates);
}

export { updateVotes, onValue, voteCount };
