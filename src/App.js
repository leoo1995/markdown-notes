import { createGlobalStyle } from "styled-components"
import { NotesProvider } from "./context/NotesContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
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
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Header />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route>
            <NotesProvider>
              <NoteSearch />
              <Note />
            </NotesProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
