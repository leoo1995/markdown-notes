import { useEffect, useContext } from "react"
import { withRouter } from "react-router-dom"
import { auth, login } from "../../services/firebase"
import { StyledLogin } from "./styles"
import { NotesContext } from "../../context/NotesContext"
const Login = props => {
  const handleClick = () => login()
  return (
    <StyledLogin>
      <h3>You have to be logged to procced</h3>
      <button onClick={handleClick}>Sign In with Google</button>
    </StyledLogin>
  )
}

export default Login
