import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavBar extends Component {
    render(){
        function toggleBurgerMenu() {
            document.querySelector('.navbar-menu').classList.toggle('is-active');
        }
        
        return(
         <nav className="navbar is-fixed-top is-info" role="navigation" aria-label="main-navigation">
             <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                   José Nathaniel Bonilla
                </Link>

                <Link to="/"  role="button" className="navbar-burger is-title" aria-label="menu" aria-expanded="false" data-target="mainNavbar" onClick={toggleBurgerMenu}>
                    Menu
                </Link>
            </div>
            
             <div id="mainNavbar" className="navbar-menu">
                 <div className="navbar-end">
                    <Link to="/" className="navbar-item " onClick={toggleBurgerMenu}>Sobre Mi</Link>
                    <Link to="/" className="navbar-item " onClick={toggleBurgerMenu}>Proyectos de programacion</Link>
                    <Link to="" className="navbar-item " onClick={toggleBurgerMenu}>Proyectos Artisticos</Link>
                 </div>
             </div>
        </nav>          
        );
    }
}

export default NavBar;