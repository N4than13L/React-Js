import React, { Component } from 'react'
import { Social } from './PanelSocial'
export class Pie extends Component {
    render(){
        return(
            <footer className="footer" style={{background: 'rgb(85, 85, 85)', color: 'white'}}>
                <h1 className="title" style={{color:'white'}}> Bonilla Motorcycles</h1>
                <p>Powered by react.</p>
                <Social/>
            </footer>
        
        );
    }
}