import React,{Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Route, Switch } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import {Tienda} from './components/Tienda'

class App extends Component {
  render(){
    return (
    <div style={{padding:0, margin:0}}>
        <Switch>
          <Route exact path="/HomePage" component={HomePage}></Route>
          <Route exact path="/Tienda" component={Tienda}></Route>
        </Switch>
    </div>
    );
  }
  
}

export default App;
