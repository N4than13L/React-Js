import React, { Component } from 'react';

import '../App.css'
class Hero extends Component {
    constructor(props){
        super(props);
        this.state = {value: 'Bienvenido a mi portafolio'}
    }
    render(){
        return(
            <div className="hero-image">
                <div className='container'>
                    <h1>José Nathaniel Bonilla</h1>
                    <p>Artista y Programador</p>
                </div>
                
            </div>   
        )
    }
}

export default Hero