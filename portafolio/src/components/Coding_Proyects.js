import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DesktopPC from '../Img/DesktopPC.jpg'
import Consola from '../Img/Consola.jpg';
import PaginaWeb from '../Img/PaginaWeb.jpg'
import Csharp_proyects from '../Pages/coding_proyects';
import {BrowserRouter ,Switch, Route} from 'react-router-dom';

class Coding_proyects extends Component {
    constructor(props){
        super(props)
        this.state = {value: ''}
    }

    render(){
        return(
            <section style={{margin: '2%',padding: '2%', width: '95%'}}>
                <br/>
                {/*Aplicaciones de escritorio*/}
                <p>{this.state.value = 'proyectos de programacion'}</p>
                
                <div className="box">
                    <p className="title">{this.state.value = 'Apps de escritorio'}</p>
                    <br/>
                    <Link to="/Chsarp_proyects">
                        <img src={DesktopPC} style={{width: '85%'}}/>
                    </Link>
                    <p style={{fontSize: 25}}>{this.state.value = "Lenguaje: "}</p>
                    <p style={{fontSize:20}}>C#</p>
                </div>
                {/*Aplicaciones de terminal con python */} 
                <div className="box">
                    <p className="title">{this.state.value = 'Applicaciones de Terminal'}</p>
                    <br/>
                    <Link>
                        <img src={Consola} style={{width: '85%'}}/>
                    </Link>
                    <p style={{fontSize: 25}}>{this.state.value = "Lenguaje: "}</p>
                    <p style={{fontSize:20}}>Python</p>
                </div>
                {/*Aplicaciones de terminal con python */}
                <div className="box">
                    <p className="title">{this.state.value = 'Aplicaciones Web'}</p>
                    <br/>
                    <Link>
                        <img src={PaginaWeb} style={{width: '85%'}}/>
                    </Link>
                    <p style={{fontSize: 25}}>{this.state.value = "Lenguaje: "}</p>
                    <p style={{fontSize:20}}>JavaScript</p>
                </div>  
            </section>
        )
    }
}

export default Coding_proyects;