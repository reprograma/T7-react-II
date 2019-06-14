import React from 'react'
import Grupo from '../../componentes/formulario/Grupo'
import Botao from '../../componentes/formulario/Botao'

class PessoaFisica extends React.Component  {
    constructor(props) {
        super(props)

        this.state ={
            nome: {
                valor: '',
                erro: ''
            },
            email: {
                valor: '',
                erro: ''
            },
            cpf: {
                valor: '',
                erro: ''
            },
            dataNascimento: {
                valor: '',
                erro: ''
            },
            senha: {
                valor: '',
                erro: ''
            },
            desabilitado: true
        }
    }

    handleChange = (nomeDoInput, valorDoInput, erro = '') => {
        const erroDoInput = erro
        this.setState({ [nomeDoInput]: { valor: valorDoInput, erro: erroDoInput } })   
    }

    estaDesabilitado = () => {
        return !this.state.nome.valor ||
                this.state.nome.erro ||
               !this.state.cpf.valor ||
                this.state.cpf.erro ||
                !this.state.dataNascimento.valor ||
                this.state.dataNascimento.erro ||
               !this.state.email.valor ||
                this.state.email.erro ||
               !this.state.senha.valor ||
                this.state.senha.erro
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const novoUsuario = {
            nome: this.state.nome.valor,
            cpf: this.state.cpf.valor,
            dataNascimento: this.state.dataNascimento.valor,
            email: this.state.email.valor,
            senha: this.state.senha.valor
        }

        const estaDesabilitado = this.estaDesabilitado()

        if(!estaDesabilitado) {
            //envia novoUsuario para API
            console.log(novoUsuario)
        }
    }

    render() {
        const estaDesabilitado = this.estaDesabilitado()

        return (
            <div className='pagina'>
                <h2>Cadastro Pessoa Fisica </h2>
                <form className='formulario' onSubmit={this.handleSubmit}>
                    <Grupo erro={this.state.nome.erro}>
                        <Grupo.Legenda htmlFor='nome' > Nome Completo:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            id='nome'
                            name='nome'
                            placeholder='Nome'
                            type='text'
                            required={true}
                            minLength={10}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.cpf.erro}>
                        <Grupo.Legenda htmlFor='cpf' > CPF:</Grupo.Legenda>
                        <Grupo.CaixaTexto
                            id='cpf' 
                            name='cpf'
                            placeholder='000.000.000-00'
                            type='text'
                            required={true}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.dataNascimento.erro}>
                        <Grupo.Legenda htmlFor='nascimento' > Data de nascimento:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            id='dataNascimento'
                            name='dataNascimento'
                            placeholder='dd/mm/aaaa'
                            type='text'
                            required={true}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.email.erro}>
                        <Grupo.Legenda htmlFor='email' > Email:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            id='email'
                            name='email'
                            placeholder='Email'
                            type='email'
                            required={true}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.senha.erro}>
                        <Grupo.Legenda htmlFor='senha' > Senha:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            id='senha'
                            name='senha'
                            placeholder='Senha'
                            type='password'
                            required={true}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Botao desabilitado={estaDesabilitado} value={'final'} onClick={this.props.onClick} className='botao'>Enviar</Botao>
                </form>
            </div>
        )
    }
    
}

export default PessoaFisica