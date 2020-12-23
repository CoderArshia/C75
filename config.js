import * as firebase from 'firebase'
require ('@firebase/firestore')


  var firebaseConfig = {
    apiKey: "AIzaSyBlJBosQ_k01J6OZ5deVgtJD1cClG1JWDo",
    authDomain: "wireless-library-app-bc081.firebaseapp.com",
    projectId: "wireless-library-app-bc081",
    storageBucket: "wireless-library-app-bc081.appspot.com",
    messagingSenderId: "311530410851",
    appId: "1:311530410851:web:e3cfdef1a50e99696b3956"
  };
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();