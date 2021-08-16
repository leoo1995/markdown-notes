//libraries
import { createGlobalStyle } from "styled-components"
import { Switch, Route, Redirect } from "react-router-dom"
//context provider
import NotesProvider from "./context/NotesContext"
//components
import Header from "./components/Header"
import Login from "./components/Login"
import Note from "./components/Note"
import NoteSearch from "./components/NoteSearch"

const GlobalStyles = createGlobalStyle`

  body{
    margin: 0;
    padding: 0;
  }
  .App{
    min-height: 100vh;
    box-sizing: border-box;
    /* background: red; */
  }
`
function App(props) {
  return (
    <div className="App">
      <GlobalStyles />

      <NotesProvider>
        <Header />

        <Route path="/dashboard" component={NoteSearch} />
        <Switch>
          <Route path="/dashboard/:id" component={Note} />
          <Route path="/login" exact component={Login} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </NotesProvider>
    </div>
  )
}

export default App
