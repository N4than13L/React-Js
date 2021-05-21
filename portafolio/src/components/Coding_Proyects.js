import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DesktopPC from '../Img/DesktopPC.jpg'
import Consola from '../Img/Consola.jpg';
import PaginaWeb from '../Img/PaginaWeb.jpg'

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
                <p>{this.setState.value = ''}</p>
                
                <div className="box">
                    <p className="title">{this.setState.value = 'Apps de escritorio'}</p>
                    <br/>
                        <img src={DesktopPC} style={{width: '85%'}}/>
                        <br/>
                        <Link to="/Chsarp_proyects" className="button is-info">ver proyectos</Link>
                    <p style={{fontSize: 25}}>{this.state.value = "Lenguaje: "}</p>
                    <p style={{fontSize:20}}>C#</p>
                </div>
                {/*Aplicaciones de terminal con python */} 
                <div className="box">
                    <p className="title">{this.setState.value = 'Applicaciones de Terminal'}</p>
                    <br/>
                        <img src={Consola} style={{width: '85%'}}/>
                        <br/>
                        <Link to="/Python_proyects" className="button is-info">ver proyectos</Link>
                    <p style={{fontSize: 25}}>{this.setState.value = "Lenguaje: "}</p>
                    <p style={{fontSize:20}}>Python</p>
                </div>
                {/*Aplicaciones de terminal con python */}
                <div className="box">
                    <p className="title">{this.setState.value = 'Aplicaciones Web'}</p>
                    <br/>
                        <img src={PaginaWeb} style={{width: '85%'}}/>
                        <br/>
                        <Link to="/Paginas_Web" className="button is-info">ver proyectos</Link>
                    <p style={{fontSize: 25}}>{this.setState.value = "Lenguaje: "}</p>
                    <p style={{fontSize:20}}>JavaScript</p>
                </div>  
            </section>
        )
    }
}

export default Coding_proyects;