import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Render from '../Img/Render.jpg';
import Draw from '../Img/Draw.jpg';
import Isla_Academica from '../Img/Isla_Academica.jpg';
import '../App.css';

class Art_Proyects extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''}
    }
    render(){
        return(
            <section>
                {/*cosas renderizadas */}
                <br/>                
                <div>
                    <p>{this.setState.value= "En este apartado estan todos mis proyectos de arte tanto de digital como renders con blender, photomontajes en photoshop y mis dibujos del tradicional."} </p>
                </div>

                <section className="Organizer">
                <div className="box">
                    <p className="title">{this.setState.value = 'Renders 3D'}</p>
                    <br/>
                        <img src={Render} style={{width: '85%'}}/>
                    <p style={{fontSize: 25}}>{this.setState.value = "Programa: "}</p>
                    <p style={{fontSize:20}}>Blender</p>
                    <Link to="/Renders" className="button is-info">Ver proyectos</Link>
                </div>
                {/*Photomanipulacion*/}
                <div className="box">
                    <p className="title">{this.state.value = 'Photomanipulacion'}</p>
                    <br/>
                    <img src={Isla_Academica} style={{width: '85%'}}/>
                    <p style={{fontSize: 25}}>{this.state.value = "Programa: "}</p>
                    <p style={{fontSize:20}}>Adobe Photoshop</p>
                    <Link to="/Photomontajes" className="button is-info">Ver proyectos</Link>
                </div>
                {/*dibujos tradicionales*/}
                <div className="box">
                    <p className="title">{this.state.value = 'Dibujos tradicionales'}</p>
                    <br/>
                        <img src={Draw}/>
                    <p style={{fontSize: 25}}>{this.state.value = "Programa: "}</p>
                    <p style={{fontSize:20}}>N/A</p>
                    <Link to="/Drawings" className="button is-info">Ver proyectos</Link>
                </div>
                </section>  
            </section>
        )
    }
}

export default Art_Proyects;