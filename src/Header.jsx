import{Link} from "react-router-dom"
import{LogoutLink} from "./LogoutLink"

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <a href="#">Link</a> | <Link to="/Login">Login</Link> | <LogoutLink /> | <Link to="/favorites">My Favorites</Link> | <Link to="/signup">Signup</Link> | <Link to="/ItemNew">Add An Item</Link>
      </nav>
    </header>
  )
}