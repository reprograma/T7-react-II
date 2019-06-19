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
    const { type, placeholder, id, value, name, required, onChange } = props
    //destructuring

    function valida(e){
        const valor = e.target.value
        const nome = e.target.name

        if(required && valor.trim() === ""){
            onChange(nome, valor, "Campo obrigatório")
            return
        }

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (type === 'email' && !regex.test(valor)) {
            onChange(nome, valor, "Digite um email válido")
            return
        }

        const regexCpf = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/
        if(name === 'numeroCpf' && !regexCpf.test(valor)) {
            onChange(nome, valor, "Digite um CPF válido")
            return
        }

        const regexData = /((\d{2})|(\d))\/((\d{2})|(\d))\/((\d{4})|(\d{2}))/ 
        if(name === 'dataNascimento' && !regexData.test(valor)) {
            onChange(nome, valor, "Digite uma data válida")
            return
        }

        const regexCep = /[0-9]{5}-[0-9]{3}/
        if(name === 'cep' && !regexCep.test(valor)) {
            onChange(nome, valor, "Digite um CEP válido")
            return
        }

        const regexCnpj = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/
        if(name === 'cnpj' && !regexCnpj.test(valor)) {
            onChange(nome, valor, "Digite um CNPJ válido")
            return
        }

        const regexSenhaMinuscula = /[a-z]/g
        const regexSenhaMaiuscula = /[A-Z]/g
        const regexSenhaNumero = /[0-9]/g
        let msgErroSenha = 'Digite uma senha com '
        if(name === 'senha') {
            if(!valor.match(regexSenhaMinuscula)) {
                msgErroSenha += 'pelo menos uma letra minuscula '
            } else if(!valor.match(regexSenhaMaiuscula)) {
                msgErroSenha += 'pelo menos uma letra maiuscula '
            } else if(!valor.match(regexSenhaNumero)) {
                msgErroSenha += 'pelo menos um número '
            } else if(valor.length < 8) {
                msgErroSenha += 'pelo menos 8 caracteres '
            } else {
                msgErroSenha = ''
            }
            onChange(nome, valor, msgErroSenha)
            return
        }
        onChange(nome, valor)
    }

    return (
        <input 
            className="campo" 
            type={type} 
            placeholder={placeholder} 
            id={id} 
            value={value}
            name={name} 
            onChange={valida}
        />
    )
}