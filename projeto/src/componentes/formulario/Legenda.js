import React from 'react'

export default function Legenda(props) {

    return (
        <label htmlFor={props.htmlFor} >
            {props.children}
        </label>
    )
}