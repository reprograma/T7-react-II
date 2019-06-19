import React from 'react'

// props = {
//     srcImagem={Astronauta},
//     altImagem="icone astronauta",
//     titulo="Pessoa Física",
//     valorImagem="PF",
//     acaoBotao={props.alteraConteudo},
// }

export default function BotaoCadastro(props){
    return (
        <button className="botao-icone" onClick={() => props.acaoBotao(props.valorImagem)}>
            <img src={props.srcImagem} className="botao-imagem" alt={props.altImagem}/>
            <span>{props.titulo}</span>
        </button> 
    )
}