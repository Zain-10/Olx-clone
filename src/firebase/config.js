import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase' 
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyB9gYp4USn0YF-X8P7JsUQ2Wzr0Gk7qttA",
    authDomain: "olx-clone-e7af5.firebaseapp.com",
    projectId: "olx-clone-e7af5",
    storageBucket: "olx-clone-e7af5.appspot.com",
    messagingSenderId: "435955489584",
    appId: "1:435955489584:web:869863e846a63cd49ec6f5",
    measurementId: "G-B06CQYS2GP"
  };

export default firebase.initializeApp(firebaseConfig)