import { useForm } from "../../hooks/useForm"
import { StyledSearch } from "./styles"
import searchIcon from "../../assets/icons/magnifier.svg"
import NoteList from "../NoteList"
const NoteSearch = () => {
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
      <NoteList />
    </StyledSearch>
  )
}

export default NoteSearch
