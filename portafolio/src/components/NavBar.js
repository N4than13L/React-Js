import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiMenu } from 'react-icons/fi'


class NavBar extends Component {
    render(){
        function toggleBurgerMenu() {
            document.querySelector('.navbar-menu').classList.toggle('is-active');
        }
        
        return(
         <nav className="navbar is-fixed-top is-info" role="navigation" aria-label="main-navigation">
             <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                   <FiHome style={{width: 45, height:50}}/>
                </Link>

                <button 
                 style={{background: 'transparent'}} 
                 className="navbar-burger is-title" 
                 aria-label="menu" aria-expanded="false" 
                 data-target="mainNavbar" onClick={toggleBurgerMenu}>
                    <FiMenu style={{width:45, height: 50}} />
                </button>
            </div>
            
             <div id="mainNavbar" className="navbar-menu">
                 <div className="navbar-end">
                    <Link to="/" className="navbar-item " onClick={toggleBurgerMenu}>Sobre Mi</Link>
                    <Link to="/Coding" className="navbar-item " onClick={toggleBurgerMenu}>Proyectos de programacion</Link>
                    <Link to="Art" className="navbar-item " onClick={toggleBurgerMenu}>Proyectos Artisticos</Link>
                 </div>
             </div>
             
        </nav>          
        );
    }
}

export default NavBar;