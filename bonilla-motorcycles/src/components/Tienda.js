import React, {Component} from 'react'
import { Productos  } from './Productos'

export class Tienda extends Component {
    render(){
        return(
            <div style={{margin: 20}}>
                <Productos/>
            </div>
            );
    }
} 