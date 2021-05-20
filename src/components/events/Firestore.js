import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDrSNiFAIqJsGpYHLTAYKTOCPBjtTmvHUA",
        authDomain: "cc-off-campus-housing.firebaseapp.com",
        projectId: "cc-off-campus-housing",
        storageBucket: "cc-off-campus-housing.appspot.com",
        messagingSenderId: "220432657011",
        appId: "1:220432657011:web:8495b0819fce4594c89806",
        measurementId: "G-T1Q23509W6"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;