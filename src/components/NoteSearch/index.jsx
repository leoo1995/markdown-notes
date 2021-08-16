import { useForm } from "../../hooks/useForm"
import { StyledSearch } from "./styles"
import searchIcon from "../../assets/icons/magnifier.svg"
import NoteList from "../NoteList"
import { addNewNote } from "../../services/firebase"
import { NotesContext } from "../../context/NotesContext"
import { useContext } from "react"
import { withRouter } from "react-router"
const NoteSearch = props => {
  const { setCurrentNote, currentNote, user } = useContext(NotesContext)
  const [value, handleChange] = useForm({ keyWord: "" })
  return (
    <StyledSearch>
      <label className="search-bar">
        <input
          type="text"
          name="keyWord"
          value={value.keyWord}
          onChange={handleChange}
          placeholder="Search"
        />
        <img src={searchIcon} alt="search icon" />
      </label>
      <button
        onClick={() => {
          addNewNote(user.uid).then(refData =>
            refData.get().then(item => {
              setCurrentNote({ id: refData.id, ...item.data() })
              props.history.push(`/dashboard/${refData.id}`)
            })
          )
        }}
      >
        Add note
      </button>
      <NoteList />
    </StyledSearch>
  )
}

export default withRouter(NoteSearch)
