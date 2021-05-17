import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Render from '../Img/Render.jpg';
import Draw from '../Img/Draw.jpg';
import Isla_Academica from '../Img/Isla_Academica.jpg';
import '../App.css'
import Button_Back from './Button_Back';

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
                <br/>
                <br/>
                <Button_Back/>
                <div className="box" style={{margin:30, padding:30}}>
                    <p className="title">{this.state.value = 'Renders 3D'}</p>
                    <br/>
                    <Link>
                        <img src={Render} style={{width: '85%'}}/>
                    </Link>
                    <p style={{fontSize: 25}}>{this.state.value = "Programa: "}</p>
                    <p style={{fontSize:20}}>Blender</p>
                </div>
                {/*Photomanipulacion*/}
                <div className="box" style={{margin:30}}>
                    <p className="title">{this.state.value = 'Photomanipulacion'}</p>
                    <br/>
                    <Link>
                        <img src={Isla_Academica} style={{width: '85%'}}/>
                    </Link>
                    <p style={{fontSize: 25}}>{this.state.value = "Programa: "}</p>
                    <p style={{fontSize:20}}>Adobe Photoshop</p>
                </div>
                {/*dibujos tradicionales*/}
                <div className="box" style={{margin:30}}>
                    <p className="title">{this.state.value = 'Dibujos tradicionales'}</p>
                    <br/>
                    <Link>
                        <img src={Draw} style={{width: '85%'}}/>
                    </Link>
                    <p style={{fontSize: 25}}>{this.state.value = "Programa: "}</p>
                    <p style={{fontSize:20}}>N/A</p>
                </div>

                
            </section>
        )
    }
}

export default Art_Proyects;