import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyDRZXVT2mF0PPCFsL0DzmRx_5ronP09yT0",
  authDomain: "catch-of-the-day-wes-bos-d09ac.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-wes-bos-d09ac.firebaseio.com",
});

const base = Rebase.createClass (firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;