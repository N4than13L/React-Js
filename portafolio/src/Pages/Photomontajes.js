import React,{Component} from 'react';
import Button_Back3 from '../components/Button_Back3';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../App.css';

class Photomontajes extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''}
    }
    render(){
        return(
            <section className="AplicacionColor">
                <NavBar/>
                <Button_Back3/>
                <p>{this.setState.value = 'En este apartado se mostraran los proyectos de photomanipulacion en diferentes tecnicas de edicion. Pasando tanto por el mattepainting y la tecnica del photobashing.'}</p>
                <br/>
                <section className="Organizer">
                <div className="box">
                    <img alt="imagen1" className=""/>
                    <p>{this.setState.value = 'Photo1'}</p>
                </div>
                <br/>   
                <div className="box">
                    <img alt="imagen2" className=""/>
                    <p>{this.setState.value = 'Photo2'}</p>
                </div>
                <br/>
                <div className="box">
                    <img alt="imagen3" className=""/>
                    <p>{this.setState.value = 'Photo3'}</p>
                </div>
                <br/>
                <div className="box">
                    <img alt="imagen4" className=""/>
                    <p>{this.setState.value = 'Photo4'}</p>
                </div>
                <br/>
                <div className="box">
                    <img alt="imagen5" className=""/>
                    <p>{this.setState.value = 'Photo5'}</p>
                </div>
                <br/>
                <div className="box">
                    <img alt="imagen6" className=""/>
                    <p>{this.setState.value = 'Photo6'}</p>
                </div>
                <br/>
                <div className="box">
                    <img alt="imagen7" className=""/>
                    <p>{this.setState.value = 'Photo7'}</p>
                </div>
                <br/>
                <div className="box">
                    <img alt="imagen8" className=""/>
                    <p>{this.setState.value = 'Photo8'}</p>
                </div>
                <br/>
                <div className="box">
                    <img alt="imagen9" className=""/>
                    <p>{this.setState.value = 'Photo9'}</p>
                </div>
                <br/>
                <div className="box">
                    <img alt="imagen10" className=""/>
                    <p>{this.setState.value = 'Photo10'}</p>
                </div>
                </section>
                <Footer/>
            </section>
        ) 
    }
}

export default Photomontajes;