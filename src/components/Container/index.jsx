import { useContext } from "react"
import { NotesContext } from "../../context/NotesContext"
import { Route, Redirect, Switch } from "react-router-dom"
import Login from "../Login"
import Note from "../Note"
import NoteSearch from "../NoteSearch"
import { StyledContainer } from "./styles"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Container = () => {
  const { isLoading } = useContext(NotesContext)
  return (
    <StyledContainer>
      {isLoading ? (
        <Loader type="ThreeDots" color="lightgreen" height={100} width={100} />
      ) : (
        <>
          <Route path="/dashboard" component={NoteSearch} />
          <Switch>
            <Route path="/dashboard/:id" component={Note} />
            <Route path="/login" exact component={Login} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </>
      )}
    </StyledContainer>
  )
}

export default Container
