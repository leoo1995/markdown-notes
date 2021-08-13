import { createGlobalStyle } from "styled-components"
import Header from "./components/Header"
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
  }
`
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <NoteSearch />
      <Note />
    </div>
  )
}

export default App
