import React from 'react'
import Astronauta from '../../imagens/astronaut.png'
import Globo from '../../imagens/globe.png'
import BotaoCadastro from '../../componentes/formulario/BotaoCadastro'

// props = {
//     alteraConteudo
// }

export default function Inicial(props){
    return (
        <div className="pagina">
            <h1>Escolha qual tipo de cadastro:</h1>
            <div className="pagina__botao">
                <BotaoCadastro 
                    srcImagem={Astronauta}
                    altImagem="icone astronauta"
                    titulo="Pessoa Física"
                    valorImagem="PF"
                    acaoBotao={props.alteraConteudo}
                />
                <BotaoCadastro 
                    srcImagem={Globo}
                    altImagem="icone globo"
                    titulo="Pessoa Juridica"
                    valorImagem="PJ"
                    acaoBotao={props.alteraConteudo}
                />
            </div>
        </div>
    )
}