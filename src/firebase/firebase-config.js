import firebase from 'firebase/app';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCHordcWb01ovLnWLSV8YYqAXaHkAgLzlk",
    authDomain: "sm-project-8778f.firebaseapp.com",
    databaseURL: "https://sm-project-8778f.firebaseio.com",
    projectId: "sm-project-8778f",
    storageBucket: "sm-project-8778f.appspot.com",
    messagingSenderId: "732118413035",
    appId: "1:732118413035:web:67c9237be8bc0c54b658ae",
    measurementId: "G-3104RPE6L7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();

export{
    firebase, storage as default
}
