import React from 'react'

export default function Legenda(props) {
    return (
        <label htmlFor={props.htmlForLegenda} >
            {props.children}
        </label>
    )
}