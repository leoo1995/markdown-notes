import React from "react"
import { auth, app } from "../../firebase"
import { StyledLogin } from "./styles"

const Login = () => {
  const handleClick = event => {
    const provider = new app.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <StyledLogin>
      <h3>You have to be logged to procced</h3>
      <button onClick={handleClick}>Sign In with Google</button>
    </StyledLogin>
  )
}

export default Login
