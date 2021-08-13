import { useForm } from "../../hooks/useForm"
import { StyledNote } from "./styles"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
const Note = () => {
  const [note, handleChange] = useForm({ bodyNote: `` })
  const markdown = note.bodyNote
  return (
    <StyledNote>
      <div className="note-editor">
        <textarea
          name="bodyNote"
          value={note.bodyNote}
          onChange={handleChange}
        ></textarea>

        <span>{"jueves 13 de agosto"}</span>
      </div>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </StyledNote>
  )
}

export default Note
