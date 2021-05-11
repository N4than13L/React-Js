import React, { Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Home from './Pages/Home';
import {BrowserRouter ,Switch, Route} from 'react-router-dom';
import Coding from './Pages/Coding';
import Art from './Pages/Art';
import Csharp_proyects from './Pages/coding_proyects';
import Python_proyects from './Pages/Python_proyects';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Coding' exact component={Coding}/>
          <Route path='/Art' exact component={Art} />
          <Route path='/Chsarp_proyects' exact component={Csharp_proyects} />
          <Route path='/Python_proyects' exact component={Python_proyects} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
