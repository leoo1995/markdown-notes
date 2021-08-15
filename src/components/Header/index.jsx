import { useContext } from "react"
import { NotesContext } from "../../context/NotesContext"
import { auth, login, logout } from "../../services/firebase"
import { StyledHeader } from "./styles"

const Header = () => {
  const { user } = useContext(NotesContext)
  // const [user, setUser] = useState(null)
  // useEffect(function () {
  //   auth.onAuthStateChanged(user => {
  //     if (user) setUser(user)
  //     else setUser(null)
  //   })
  // }, [])

  return (
    <StyledHeader>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png"
        alt="logo"
        className="logo"
      />
      <h1>Markdown Notes</h1>
      <nav>
        {user ? (
          <li>
            <button onClick={logout}>Sign out</button>
          </li>
        ) : (
          <li>
            <button onClick={login}>Sign in</button>
          </li>
        )}
        <li>
          <span>{user?.displayName}</span>
        </li>
      </nav>
      {user ? (
        <img src={user?.photoURL} alt="profile" className="profile" />
      ) : undefined}
    </StyledHeader>
  )
}

export default Header
