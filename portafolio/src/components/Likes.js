import React, { Component } from 'react';
import { IoCarSportOutline } from "react-icons/io5";
import {GiCheckeredFlag} from 'react-icons/gi'
import { FaChess } from "react-icons/fa";
import {MdKitchen} from 'react-icons/md';
import {IoIosLaptop} from 'react-icons/io';
import {AiFillFolderOpen} from 'react-icons/ai';

class Likes extends Component {
    render(){
        return(
            <div className="box">
                <div>
                <p className="title">Gustos y aficiones</p>
                <GiCheckeredFlag/>
                <IoCarSportOutline/>
                <p>
                    Carreras de cohes y motos.
                </p>
                  <FaChess/>  
                <p>
                    El ajedrez.
                </p>
                <AiFillFolderOpen/>
                <p>
                    El origami.
                </p>
                <MdKitchen/>
                <p>
                    La cocina.    
                </p>
                <IoIosLaptop/>
                <p>
                    El Hardware de PC.
                </p>
                </div>
            </div>
        )
    }
}

export default Likes;