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
import Container from "./components/Container"

const GlobalStyles = createGlobalStyle`

  body{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  .App{
    min-height: 100vh;
    box-sizing: border-box;
   
   
  }
`
function App(props) {
  return (
    <div className="App">
      <GlobalStyles />

      <NotesProvider>
        <Header />
        <Container>
          <Route path="/dashboard" component={NoteSearch} />
          <Switch>
            <Route path="/dashboard/:id" component={Note} />
            <Route path="/login" exact component={Login} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Container>
      </NotesProvider>
    </div>
  )
}

export default App
