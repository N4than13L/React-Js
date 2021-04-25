import React, { Component} from 'react'
import './App.css';
import 'bulma/css/bulma.css'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Info from './components/Info';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar/>
        <Hero/>
        <Info/>
      </div>
    );
  }
  
}

export default App;
