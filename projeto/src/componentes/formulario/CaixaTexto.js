import React from 'react'


function CaixaTexto(props) {
    function valida(e){
        const nome = e.target.name
        const valor = e.target.value

        if (props.required && valor.trim() === '') {
            props.onChange(nome, valor, "Campo obrigatório")
            return
        }

        if (props.minLength && valor.length < props.minLength) {
            props.onChange(nome, valor, `Digite pelo menos ${props.minLength} caracteres`)
            return 
        }
        
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (props.type === 'email' && !regex.test(valor)) {
            props.onChange(nome, valor, "Digite um email válido")
            return
        }

        const regexCpf = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/
        if(props.name === 'cpf' && !regexCpf.test(valor)) {
            props.onChange(nome, valor, "Digite um CPF válido")
            return
        }

        const regexData = /((\d{2})|(\d))\/((\d{2})|(\d))\/((\d{4})|(\d{2}))/ 
        if(props.name === 'dataNascimento' && !regexData.test(valor)) {
            props.onChange(nome, valor, "Digite uma data válida")
            return
        }

        const regexCep = /[0-9]{5}-[0-9]{3}/
        if(props.name === 'cep' && !regexCep.test(valor)) {
            props.onChange(nome, valor, "Digite um CEP válido")
            return
        }

        const regexCnpj = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/
        if(props.name === 'cnpj' && !regexCnpj.test(valor)) {
            props.onChange(nome, valor, "Digite um CNPJ válido")
            return
        }

        const regexSenhaMinuscula = /[a-z]/g
        const regexSenhaMaiuscula = /[A-Z]/g
        const regexSenhaNumero = /[0-9]/g
        let msgErroSenha = 'Digite uma senha com '
        if(props.name === 'senha') {
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
            props.onChange(nome, valor, msgErroSenha)
            return
        }

        props.onChange(nome, valor)
    }


    return (
        <input
            id={props.id}
            className="campo" 
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onChange={valida}
        />
    )
}

export default CaixaTexto