import React from 'react'
import Grupo from '../../componentes/formulario/Grupo'
import Botao from '../../componentes/formulario/Botao'

export default class PessoaJuridica extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            razaoSocial: {
                valor: '',
                erro: ''
            },
            email: {
                valor: '',
                erro: ''
            },
            cnpj: {
                valor: '',
                erro:''
            },
            cep: {
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
        this.setState({
            [nomeDoInput]: {
                valor: valorDoInput,
                erro: erro
            }
        })
    }

    estaDesabilitado = () => {
        return !this.state.razaoSocial.valor ||
                this.state.razaoSocial.erro ||
               !this.state.cnpj.valor ||
                this.state.cnpj.erro ||
                !this.state.cep.valor ||
                this.state.cep.erro ||
               !this.state.email.valor ||
                this.state.email.erro ||
               !this.state.senha.valor ||
                this.state.senha.erro
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const novoUsuario = {
            razaoSocial: this.state.razaoSocial.valor,
            cnpj: this.state.cnpj.valor,
            cep: this.state.cep.valor,
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
                <h2>Cadastro Pessoa Juridica</h2>
                <form className='formulario' onSubmit={this.handleSubmit}>
                    <Grupo erro={this.state.razaoSocial.erro}>
                        <Grupo.Legenda htmlFor='razaoSocial' > Razão Social:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name='razaoSocial'
                            placeholder='Razão Social'
                            type='text'
                            required={true}
                            minLength={10}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.cnpj.erro}>
                        <Grupo.Legenda htmlFor='cnpj' > CNPJ:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name='cnpj'
                            placeholder='CNPJ'
                            type='text'
                            required={true}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.cep.erro}>
                        <Grupo.Legenda htmlFor='cep' > CEP:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name='cep'
                            placeholder='00000-000'
                            type='text'
                            required={true}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.email.erro}>
                        <Grupo.Legenda htmlFor='email' > Email:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name='email'
                            placeholder='Email'
                            type='text'
                            required={true}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.senha.erro}>
                        <Grupo.Legenda htmlFor='senha' > Senha:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name='senha'
                            placeholder='Senha'
                            type='password'
                            required={true}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Botao desabilitado={estaDesabilitado} value='final' onClick={this.props.onClick} className='botao'>Enviar</Botao>
                </form>
            </div>
        )
    }
    
}