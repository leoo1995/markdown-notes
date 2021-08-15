import app from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDR1EfERlSCg5uZ261IwAj7gnXTxUo_gnw",
  authDomain: "markdown-notes-65f6e.firebaseapp.com",
  projectId: "markdown-notes-65f6e",
  storageBucket: "markdown-notes-65f6e.appspot.com",
  messagingSenderId: "543196089384",
  appId: "1:543196089384:web:e3458fa3f66f8054b6391d"
}
// Initialize Firebase
app.initializeApp(firebaseConfig)
const db = app.firestore()
const auth = app.auth()
const login = () => {
  const provider = new app.auth.GoogleAuthProvider()
  auth.signInWithPopup(provider)
}
const logout = () => {
  auth.signOut()
}
const updateNote = note =>
  db
    .collection("notes")
    .doc(note.id)
    .update({ body: note.body, title: note.title })

const addNewNote = () =>
  db.collection("notes").add({ body: "", title: "", date: new Date() })
const deleteNote = id => db.collection("notes").doc(id).delete()
export { app, db, auth, login, logout, updateNote, addNewNote, deleteNote }
