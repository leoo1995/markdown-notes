import { useContext, useEffect, useState } from "react"
import { NotesContext } from "../../context/NotesContext"
import { NavLink } from "react-router-dom"
import { StyledListNotes } from "./styles"
const NoteList = ({ keyword }) => {
  const { notes, setCurrentNote } = useContext(NotesContext)
  const [filteredNotes, setFilteredNotes] = useState(notes)
  useEffect(() => {
    if (keyword !== "") {
      setFilteredNotes(notes.filter(note => note.body.includes(keyword)))
    } else {
      setFilteredNotes(notes)
    }
  }, [keyword, notes])
  const handleClick = currentNote => setCurrentNote(currentNote)

  return (
    <StyledListNotes>
      {filteredNotes.map(note => (
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
