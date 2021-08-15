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
db.settings({
  timestampsInSnapshots: true
})
const auth = app.auth()
export const login = () => {
  const provider = new app.auth.GoogleAuthProvider()
  auth.signInWithPopup(provider)
}
export const logout = () => {
  auth.signOut()
}
export const updateNote = (note, uid) =>
  db.collection(uid).doc(note.id).update({ body: note.body, title: note.title })

export const addNewNote = uid =>
  db.collection(uid).add({ body: "", title: "", date: new Date() })
export const deleteNote = (id, uid) => db.collection(uid).doc(id).delete()
export { app, db, auth }
