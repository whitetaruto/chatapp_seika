import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAN5DIcZOT5cEQsZa8QDf6LsEtkXUxdHuY",
    authDomain: "chat-app-1bc80.firebaseapp.com",
    projectId: "chat-app-1bc80",
    storageBucket: "chat-app-1bc80.appspot.com",
    messagingSenderId: "365586935725",
    appId: "1:365586935725:web:a446ee02f3016a94017b24"
}

firebase.initializeApp(firebaseConfig)

export default firebase