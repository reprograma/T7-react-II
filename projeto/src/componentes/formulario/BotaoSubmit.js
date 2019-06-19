import React from 'react'

// props = {
//     desabilitado=booelan
//     classeBotao=String
//     acaoBotao=Function
//     children=Texto do botao
// }

export default function BotaoSubmit(props) {
    console.log(props, "props botao")
    // let classes = props.classeBotao
    // if(props.desabilitado){
    //     classes += ' botao--desabilitado'
    // }

    let classes = props.desabilitado ? (props.classeBotao + ' botao--desabilitado') : props.classeBotao
    
    return (
        <button className={classes} onClick={props.acaoBotao}>
            {props.children}
        </button>
    )
}