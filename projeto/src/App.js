import React from 'react'
import { Switch, Route } from 'react-router-dom'
//componentes
import Navbar from './componentes/nav/Nav'
//paginas
import Cadastro from './paginas/Cadastro'
import Home from './paginas/Home'
import Chat from './paginas/Chat'

function App(props) {
    return (
        <Switch>
            <div>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/chat' component={Chat} />
            </div> 
        </Switch>
    )
}

export default App
        
    


