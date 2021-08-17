//libraries
import { createGlobalStyle } from "styled-components"
//context provider
import NotesProvider from "./context/NotesContext"
//components
import Header from "./components/Header"
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
      <NotesProvider>
        <GlobalStyles />
        <Header />
        <Container />
      </NotesProvider>
    </div>
  )
}

export default App
