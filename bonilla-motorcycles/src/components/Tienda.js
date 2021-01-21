import React, {Component} from 'react'
import { Productos  } from './Productos'
import {Pie} from './PieDePagiona'
export class Tienda extends Component {
    render(){
        return(
            <div>
                <div style={{margin: 20}}>
                    <Productos/>
                </div>
                <Pie/>
            </div>
            );
    }
} 