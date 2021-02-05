import React, {Component} from 'react'
import { Link } from 'react-router-dom'


export class Navbar extends Component {
    render() {
      return(
        <nav className="navbar is-info" style={{position:'fixed', width:'100%'}}>
          <div className="navbar-brand">
            <label className="title" style={{margin:5}}>Bonila Motorcycles</label>
          </div>
  
          <div className="navbar-end" >
              <div className="navbar-start">
                <Link to="/HomePage" className="navbar-item">Inicio</Link>
                <Link to="/Tienda" className="navbar-item">Tienda</Link>
                <Link to="" className="navbar-item">Ubicacion</Link>
                <Link to="" className="navbar-item">Preguntas y Respuestas</Link>
              </div>
          </div>
      
        </nav>
      );
    }
  }
  