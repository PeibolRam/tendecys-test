import { Link } from "react-router-dom"
import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/'>Order list</Link>

    </nav>
  )
}
