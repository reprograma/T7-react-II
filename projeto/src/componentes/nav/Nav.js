import React from 'react'
import Logo from '../../imagens/RocketChat.png'
import Menu from './menu/Menu'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav(props) {
  return (
    <nav className="navbar">
      <div>
          <Link to="/"> <img className="navbar-logo" src={Logo} alt="Logotipo do RocketChat" /> </Link>
      </div>
      <Menu />
  </nav>
  )
}
   
    


export default Nav