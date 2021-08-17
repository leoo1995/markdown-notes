import { login } from "../../services/firebase"
import { StyledLogin } from "./styles"

const Login = props => {
  const handleClick = () => login()
  return (
    <StyledLogin>
      <h3>You have to be logged to procced</h3>
      <button onClick={handleClick}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="google logo"
        />
        Sign In with Google
      </button>
    </StyledLogin>
  )
}

export default Login
