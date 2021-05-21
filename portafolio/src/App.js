import React, { Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Home from './Pages/Home';
import {BrowserRouter ,Switch, Route} from 'react-router-dom';
import Coding from './Pages/Coding';
import Art from './Pages/Art';
import Csharp_proyects from './Pages/coding_proyects';
import Python_proyects from './Pages/Python_proyects';
import Renders from './Pages/Render';
import Photomontajes from './Pages/Photomontajes';
import Drawings from './Pages/Drawings';
import Paginas_Web from './Pages/paginas_Web';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          {/*Paginas principales*/}
          <Route path='/' exact component={Home} />
          <Route path='/Coding' exact component={Coding}/>
          <Route path='/Art' exact component={Art} />
          {/*separando paginas prinncipales de las paginas secundarias.*/}
          <Route path='/Chsarp_proyects' exact component={Csharp_proyects} />
          <Route path='/Python_proyects' exact component={Python_proyects} />
          <Route path='/Renders' exact component={Renders} />
          <Route path='/Photomontajes' exact component={Photomontajes} />
          <Route path='/Drawings' exact component={Drawings} />
          <Route path='/Paginas_Web' exact component={Paginas_Web} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
