import React from 'react'
import Astronauta from '../../imagens/astronaut.png'
import Globo from '../../imagens/globe.png'

export default function Inicial(props){
    return (
        <div className="pagina">
            <h1>Escolha qual tipo de cadastro:</h1>
            <div className="pagina__botao">
                <button className="botao-icone">
                    <img src={Astronauta} className="botao-imagem" alt="icone astronauta"/>
                    <span>Pessoa Física</span>
                </button> 
                <button className="botao-icone">
                    <img src={Globo} className="botao-imagem" alt="icone Globo"/>
                    <span>Pessoa Juridica</span>
                </button>
            </div>
        </div>
    )
}