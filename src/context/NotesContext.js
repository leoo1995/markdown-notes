import { createContext, useState, useEffect } from "react"
import { db } from "../services/firebase"
export const NotesContext = createContext()

export const NotesProvider = ({ children }) => {
  const [state, setState] = useState({ notes: [], currentNote: {} })

  const setCurrentNote = note => setState(s => ({ ...s, currentNote: note }))
  useEffect(function () {
    const getData = async () => {
      try {
        const data = await db.collection("notes")
        data.onSnapshot(query => {
          const notes = query.docs.map(item => ({
            id: item.id,
            ...item.data()
          }))
          setState(s => ({
            ...s,
            notes
          }))

          // doc.forEach(item => console.log(item.data()))
        })

        // const arrayData = data.docs.map(doc => ({
        //   id: doc.id,
        //   ...doc.data()
        // }))
        // setState({ ...state, notes: arrayData })
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
        setState,
        setCurrentNote
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}
