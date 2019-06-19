import React from 'react'

// props = {
//     placeholder="Nome" 
//     id="nomeSobrenome"
//     type="text" 
//     value={this.state.nomeSobrenome}name="nomeSobrenome" 
//     onChange={this.handleChange}
//      required=true
// }
export default function CaixaTexto(props) {
    function valida(e){
        if(props.required && e.target.value.trim() === ""){
            props.onChange(e.target.name, e.target.value, "Campo obrigatório")
            return
        }
        props.onChange(e.target.name, e.target.value)
    }

    return (
        <input 
            className="campo" 
            type={props.type} 
            placeholder={props.placeholder} 
            id={props.id} 
            value={props.value}
            name={props.name} 
            onChange={valida}
        />
    )
}