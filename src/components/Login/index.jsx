import { login } from "../../services/firebase"
import { StyledLogin } from "./styles"

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
