import * as firebase from 'firebase/app';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyDFOZ3Q3ojnHxO7K5_Z4jT8VxCRgdZlSBs",
    authDomain: "todoapp-d1e4f.firebaseapp.com",
    databaseURL: "https://todoapp-d1e4f.firebaseio.com",
    projectId: "todoapp-d1e4f",
    storageBucket: "todoapp-d1e4f.appspot.com",
    messagingSenderId: "537706721462",
    appId: "1:537706721462:web:800f154ea655c83428f617",
    measurementId: "G-GPYWK9RCE6"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);
  