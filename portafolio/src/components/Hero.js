import React, { Component } from 'react';
import Beach2 from '../Img/Beach2.jpg'
import '../App.css'

class Hero extends Component {
    render(){
        return(
            <section className="hero is-large is-info">
                <p className="title">Bienvenido</p>
                <img src={Beach2} className="imgs"/>
            </section>   
        )
    }
}

export default Hero