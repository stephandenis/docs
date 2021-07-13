import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkueOddZVGlpxeNhkYj7_MQgzd8RvbP34",
  authDomain: "docsremake.firebaseapp.com",
  projectId: "docsremake",
  storageBucket: "docsremake.appspot.com",
  messagingSenderId: "166671992744",
  appId: "1:166671992744:web:b200162b0273ced0baff9d",
};

const app = !firebase.apps.length //if there's no app
  ? firebase.initializeApp(firebaseConfig) // initialize for the first time
  : firebase.app(); // otherwise use the one already initialized

const db = app.firestore();

export { db };
