import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';

import Circuitos from './components/circuitos/Circuitos';
import Pilotos from './components/pilotos/Pilotos';

class App extends Component {

  render() {
    return <div>
      <Router>
        <Route exact path="/" render={() => {
          return <div>
            <Link to="/circuitos">Circuitos</Link>
            <br/>
            <Link to="/pilotos">Pilotos</Link>
          </div>
        }}>
        </Route>

        <Route path="/circuitos" component={ Circuitos } />
        <Route path="/pilotos" component={ Pilotos } />
      </Router>
    </div>
  }
}

export default App;
