import React, { Component } from 'react'
import '../App.css'

class Motos extends Component {
    render(){
        return(
            <div style={{margin:10}} >
                <article className="message is-warning">
                <div className="message-header">
                    Motos
                </div>
                <div className="message-body">
                    <div className="media">
                        <div className="media-left">
                            
                   </div>
                    </div>
                </div>
            </article>
                </div>
        );
    }
}

export class Productos extends Component{
    render(){
        return(
            <div>
                <Motos/>
            </div>
        )
    }
}