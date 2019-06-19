import React from 'react'

// props = {
//     desabilitado=booelan
//     classeBotao=String
//     acaoBotao=Function
//     children=Texto do botao
// }

export default function BotaoSubmit(props) {
    return (
        <button className={props.classeBotao} onClick={props.acaoBotao}>
            {props.children}
        </button>
    )
}