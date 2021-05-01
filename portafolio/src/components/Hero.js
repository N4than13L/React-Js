import React, { Component } from 'react';

class Hero extends Component {
    constructor(props){
        super(props);
        this.state = {value: 'Bienvenido a mi portafolio'}
    }
    render(){
        return(
            <section>
                { /**img src={Beach2} className="imgs">**/}
                <p className="title" style={{padding: 40, margin: 20}}>{this.state.value}</p>
            </section>   
        )
    }
}

export default Hero