import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEyAoTcEnih7cZ0VSsI9lm1ZcDtEEe8wM",
    authDomain: "react-mern-messenger.firebaseapp.com",
    projectId: "react-mern-messenger",
    storageBucket: "react-mern-messenger.appspot.com",
    messagingSenderId: "336055524850",
    appId: "1:336055524850:web:2cc16d4d2642d40a961f6b"
})

const db = firebaseApp.firestore()

export default db