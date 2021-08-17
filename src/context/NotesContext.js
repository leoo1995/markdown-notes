import { createContext, useState, useEffect } from "react"
import { db, auth } from "../services/firebase"
import { withRouter } from "react-router-dom"
export const NotesContext = createContext()

const NotesProvider = props => {
  const [state, setState] = useState({
    notes: [],
    currentNote: {},
    user: null,
    isLoading: false
  })
  const setIsLoading = bool => setState(s => ({ ...s, isLoading: bool }))
  const setCurrentNote = note => setState(s => ({ ...s, currentNote: note }))
  useEffect(function () {
    const getData = async () => {
      try {
        auth.onAuthStateChanged(user => {
          if (user) {
            setState(s => ({ ...s, user }))
            if (!state.notes.length) {
              setIsLoading(true)
            }
            const data = db.collection(user.uid)
            data.onSnapshot(query => {
              const notes = query.docs.map(item => ({
                id: item.id,
                ...item.data()
              }))

              setState(s => ({
                ...s,
                notes
              }))
              setIsLoading(false)
            })
            props.history.push("/")
          } else {
            props.history.push("/login")
            setState(s => ({ ...s, user: null }))
          }
        })
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])
  return (
    <NotesContext.Provider
      value={{
        currentNote: state.currentNote,
        notes: state.notes,
        user: state.user,
        isLoading: state.isLoading,
        setState,
        setCurrentNote
      }}
    >
      {props.children}
    </NotesContext.Provider>
  )
}
export default withRouter(NotesProvider)
