import { useContext } from "react"
import { NotesContext } from "../../context/NotesContext"

import { StyledListNotes } from "./styles"
const NoteList = () => {
  const { notes, setCurrentNote } = useContext(NotesContext)
  const handleClick = currentNote => setCurrentNote(currentNote)

  return (
    <StyledListNotes>
      {notes.map(note => (
        <li key={note.id} onClick={() => handleClick(note)}>
          {note.title}
        </li>
      ))}
    </StyledListNotes>
  )
}

export default NoteList
