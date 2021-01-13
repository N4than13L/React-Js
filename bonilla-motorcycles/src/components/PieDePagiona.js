import React, { Component } from 'react'
import { Social } from './PanelSocial'
export class Pie extends Component {
    render(){
        return(
            <footer className="footer">
                <h1 className="title"> Bonilla Motorcycles</h1>
                <p>Powered by react.</p>
                <Social/>
            </footer>
        
        );
    }
}