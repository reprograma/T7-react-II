import React from 'react'
import Logo from '../../imagens/RocketChat.png'
import Menu from './menu/Menu'
import './nav.css'

export default function Nav(props) {
    return (
        <nav className='navbar'>
            <div>
                <img className='navbar-logo' src={Logo} alt='Logotipo de RocketChat' />
            </div>
           <Menu />
        </nav>
    )
}