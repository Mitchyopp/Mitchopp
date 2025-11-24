import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <nav className="nav">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/contact">
        Contact
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
      <NavLink to="/blogs">
        Blogs
      </NavLink>
    </nav>
  )
}

export default Header
