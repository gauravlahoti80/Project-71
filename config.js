import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCYNSWpYMUWCVBhVHpT-E75PedQvd8-L4o",
    authDomain: "story-hub-7f0d2.firebaseapp.com",
    projectId: "story-hub-7f0d2",
    storageBucket: "story-hub-7f0d2.appspot.com",
    messagingSenderId: "1050565674807",
    appId: "1:1050565674807:web:8992ba24c7579b73a4fcb2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();