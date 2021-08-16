import { useContext } from "react"
import { NotesContext } from "../../context/NotesContext"
import { NavLink } from "react-router-dom"
import { StyledListNotes } from "./styles"
const NoteList = () => {
  const { notes, setCurrentNote } = useContext(NotesContext)
  const handleClick = currentNote => setCurrentNote(currentNote)

  return (
    <StyledListNotes>
      {notes.map(note => (
        <NavLink
          key={note.id}
          to={`/dashboard/${note.id}`}
          onClick={() => handleClick(note)}
          activeClassName="active"
        >
          {note.title}
        </NavLink>
      ))}
    </StyledListNotes>
  )
}

export default NoteList
