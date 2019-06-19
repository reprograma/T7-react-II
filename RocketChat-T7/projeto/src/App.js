import React from 'react';
//paginas
import Home from './paginas/Home'
import Cadastro from './paginas/Cadastro'
import Chat from './paginas/Chat'
//componentes
import Nav from './componentes/nav/Nav'
import { Switch, Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Switch>
      <div>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/chat" component={Chat} />
      </div>
    </Switch>
  );
}

export default App;
