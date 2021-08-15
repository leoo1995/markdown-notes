import { createContext, useState, useEffect } from "react"
import { db, auth } from "../services/firebase"
export const NotesContext = createContext()

export const NotesProvider = ({ children }) => {
  const [state, setState] = useState({ notes: [], currentNote: {}, user: null })

  const setCurrentNote = note => setState(s => ({ ...s, currentNote: note }))
  useEffect(function () {
    const getData = async () => {
      try {
        auth.onAuthStateChanged(user => {
          if (user) {
            setState(s => ({ ...s, user }))
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
            })
          } else setState(s => ({ ...s, user: null }))
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
        setState,
        setCurrentNote
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}
