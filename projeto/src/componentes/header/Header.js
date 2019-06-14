import React from 'react' 
import './Header.css'


function Header(props) {

    return (
        <section className={props.className}>
            <h1>{props.titulo}</h1>
            {props.children}
        </section>
    )
}

export default Header