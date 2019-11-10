// Scuba Log's Firebase Configuration

var firebaseConfig = {
    apiKey: "AIzaSyDG6WwVDEWYQoDYTknfV_z5Ml3n5pBOjFU",
    authDomain: "scubalogs-f466a.firebaseapp.com",
    databaseURL: "https://scubalogs-f466a.firebaseio.com",
    projectId: "scubalogs-f466a",
    storageBucket: "scubalogs-f466a.appspot.com",
    messagingSenderId: "39791069014",
    appId: "1:39791069014:web:03381d3ad726d71d1bb8f7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();