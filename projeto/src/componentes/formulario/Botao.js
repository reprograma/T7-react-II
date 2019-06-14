import React from 'react'

export default class Botao extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            classes: this.props.className
        }
    }
    
    componentWillMount() {
        if (this.props.desabilitado && this.props.className === 'botao') {
            this.setState({ classes: this.props.classes + ' botao--desabilitado'})
        }
    }
    
    handleClick = (e) => {
        e.preventDefault()
        this.props.onClick(this.props.value)
    }
    render() {
        return (
            <button value={this.props.value} onClick={this.handleClick} className={this.state.classes}>
                {this.props.children}
            </button>
        )
    }
    
}