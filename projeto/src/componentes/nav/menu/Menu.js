import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

class LinkMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aberto: false
    }
  }

  handleAbreOuFecha = e => {
    this.setState(prevState => {
        return { aberto: !prevState.aberto }
    })
  }


  render () {
    let classesDasOpcoes = "navbar-menu__opcoes"
    let classesDoBotao = "navbar-menu__botao"

    if (this.state.aberto) {
        classesDasOpcoes += " navbar-menu__opcoes--aberto"
        classesDoBotao += " navbar-menu__botao--aberto"
    } 

    return (
      <div className="navbar-menu navbar-links">
        <a className={classesDoBotao} onClick={this.handleAbreOuFecha}> 
          Menu 
        </a>
        <ul className={classesDasOpcoes}>
          <li>
            <Link to="/" className="navbar-links__ativo" >Home</Link>
          </li>
          <li>
            <Link to="/cadastro" className="navbar-links__ativo" >Cadastro</Link>
          </li>
          <li>
            <Link to="/chat" className="navbar-links__ativo" >Chat</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default LinkMenu