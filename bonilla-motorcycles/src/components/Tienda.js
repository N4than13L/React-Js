import React, {Component} from 'react'
import { Productos  } from './Productos'
import {Pie} from './PieDePagiona'
import photo from '../Photo/photo.jpeg'
import "../App.css"
export class Tienda extends Component {
    render(){
        return(
            <div style={{display:'relative'}}>
                <figure className="Logo" >
                    <img src={photo} alt="" />
               </figure>
                <div style={{margin: 20}}>
                 
                    <Productos/>
                </div>
                <Pie/>
            </div>
            );
    }
} 