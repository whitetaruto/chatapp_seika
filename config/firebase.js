import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "-------------------------",
    authDomain: "-------------------------",
    projectId: "-------------------------",
    storageBucket: "-------------------------",
    messagingSenderId: "-------------------------",
    appId: "-------------------------"
}

firebase.initializeApp(firebaseConfig)

export default firebase
