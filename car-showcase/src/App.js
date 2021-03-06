import React, { Component } from 'react';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Car from './components/Car';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/:car_id' component= { Car } />
        </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
