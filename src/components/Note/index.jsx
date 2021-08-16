import { useContext } from "react"
import dayjs from "dayjs"
import { StyledNote } from "./styles"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { NotesContext } from "../../context/NotesContext"
import { addNewNote, deleteNote, updateNote } from "../../services/firebase"
import { Link, withLink } from "react-router-dom"
const Note = props => {
  const { currentNote, setCurrentNote, user } = useContext(NotesContext)

  const handleChange = event => {
    setCurrentNote({
      ...currentNote,
      body: event.target.value,
      title: event.target.value.slice(0, 20).trim()
    })
  }

  const markdown = currentNote.body
  return (
    <StyledNote>
      {/* <button
        onClick={() => {
          addNewNote(user.uid).then(refData =>
            refData.get().then(item => {
              setCurrentNote({ id: refData.id, ...item.data() })
            })
          )
        }}
      >
        Add note
      </button> */}
      <div className="note-editor">
        <textarea
          name="body"
          value={markdown}
          onChange={handleChange}
        ></textarea>

        <span>
          {currentNote
            ? `${dayjs(currentNote?.date?.toDate()).format(
                "[Created on ]DD MMM"
              )}, contains ${currentNote?.body?.split(" ").length}`
            : undefined}
        </span>
      </div>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      <button onClick={() => updateNote(currentNote, user.uid)}>
        save note
      </button>
      <Link to="/dashboard">close note</Link>
      <Link
        to="/dashboard"
        onClick={() => deleteNote(currentNote.id, user.uid)}
      >
        delete note
      </Link>
    </StyledNote>
  )
}

export default Note
