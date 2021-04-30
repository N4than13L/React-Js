import React, { Component } from 'react';
import Beach2 from '../Img/Beach2.jpg'


class Hero extends Component {
    constructor(props){
        super(props);
        this.state = {value: 'Bienvenido'}
    }
    render(){
        return(
            <section>
                <img src={Beach2} className="imgs"/>
                <p className="title">{this.state.value}</p>
            </section>   
        )
    }
}

export default Hero