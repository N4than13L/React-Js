import React, { Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Home from './Pages/Home';
import {BrowserRouter ,Switch, Route} from 'react-router-dom';
import Coding from './Pages/Coding';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Coding' exact component={Coding}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
