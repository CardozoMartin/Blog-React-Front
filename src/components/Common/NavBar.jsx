import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">login</NavLink>
            <NavLink to="/userPerfil">Perfil</NavLink>
           
        </nav>
    </header>
  )
}

export default NavBar