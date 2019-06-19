import React from 'react'
import Legenda from './Legenda';
import CaixaTexto from './CaixaTexto';

export default function Grupo(props) {
    return(
        <div>
            {props.children}
            {
                props.erro && (
                    <p className='grupo__erro'>
                       {props.erro} 
                    </p>
                )
            }
        </div>
    )
}

Grupo.Legenda = Legenda
Grupo.CaixaTexto = CaixaTexto