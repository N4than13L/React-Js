import React, { Component } from 'react';
import Art_Proyects from '../components/Art_Proyects';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer.js';
import '../App.css'

class Art extends Component {
    render(){
        return (
            <section className="AplicacionColor">
                <NavBar/>
                <Art_Proyects/>
                <Footer/>
            </section>
        );
    }
}

export default Art;