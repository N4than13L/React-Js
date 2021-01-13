import React, {Component} from 'react'
import photo from '../Photo/photo.jpeg'
import '../App.css'
import {  Contenido } from './Contenido'
import { Pie } from './PieDePagiona'


export class HomePage extends Component {
    render(){
        return(
         <div className="contenedor">
               <figure className="Logo" >
                    <img src={photo} alt="" />
               </figure> 
               <Contenido/>
                <Pie/>
         </div>
            
        );
    }
} 