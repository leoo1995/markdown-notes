import { useContext } from "react"
import dayjs from "dayjs"
import { StyledNote, StyledModalContainer } from "./styles"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { NotesContext } from "../../context/NotesContext"
import { deleteNote, updateNote } from "../../services/firebase"
import { Link } from "react-router-dom"
import Modal from "../Modal"
import { useModal } from "../../hooks/useModal"

const Note = props => {
  const { currentNote, setCurrentNote, user } = useContext(NotesContext)
  const [isDeleteModalOpen, openDeleteModal, closeDeleteModal] = useModal()
  const handleDelete = () => {
    deleteNote(currentNote.id, user.uid)
    closeDeleteModal()
  }
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
      <div className="buttons">
        <button
          className="save-button"
          onClick={() => updateNote(currentNote, user.uid)}
        >
          Save note
        </button>
        <Link to="/dashboard">Close note</Link>
        <button onClick={() => openDeleteModal()} className="delete-button">
          Delete
        </button>
      </div>

      <ReactMarkdown
        className="innerHTML"
        children={markdown}
        remarkPlugins={[remarkGfm]}
      />

      <Modal
        isOpen={isDeleteModalOpen}
        openModal={openDeleteModal}
        closeModal={closeDeleteModal}
        stylesContainer={StyledModalContainer}
      >
        Are you sure to delete this note?
        <Link to="/dashboard" onClick={handleDelete}>
          Delete note
        </Link>
      </Modal>
    </StyledNote>
  )
}

export default Note
