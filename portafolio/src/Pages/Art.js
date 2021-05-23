import React, { Component } from 'react';
import Art_Proyects from '../components/Art_Proyects';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer.js';
import '../App.css';
import Button_Back2 from '../components/Button_Back2';

class Art extends Component {
    render(){
        return (
            <section className="AplicacionColor">
                <NavBar/>
                <Button_Back2/>
                <Art_Proyects/>
                <Footer/>
            </section>
        );
    }
}

export default Art;