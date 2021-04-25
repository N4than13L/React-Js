import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render(){
        return(
         <nav className="navbar is-info" 
          role="navigation" aria-label="main navigation" 
          style={{position: 'fixed', width:'100%'}}>
             <div className="navbar-brand"></div>

            <Link to="" className="button is-info">Acerca de mi</Link>
            <Link to="" className="button is-info"> Proyectos de Programación</Link>
            <Link to="" className="button is-info">Proyectos Artisicos</Link>
        </nav>                
        );
    }
}

export default NavBar