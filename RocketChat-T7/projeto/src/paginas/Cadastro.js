import React from 'react'
import './cadastro.css'
import Inicial from './cadastro/Inicial'
import PessoaFisica from './cadastro/PessoaFisica'
import PessoaJuridica from './cadastro/PessoaJuridica'

export default class Cadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conteudo: undefined,
        }
    }

    handleMudaConteudo = (valor) => {
        this.setState({ 
            conteudo: valor
        })
    }

    render() {
        return(
            <div className="cadastro">
                {
                    this.state.conteudo === undefined &&
                    <Inicial alteraConteudo={this.handleMudaConteudo} />
                }
                {
                    this.state.conteudo === "PF" &&
                    <PessoaFisica />
                }
                {
                    this.state.conteudo === "PJ" &&
                    <PessoaJuridica />
                }
            </div> 
        )
    }
}


