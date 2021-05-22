import React, { Component} from 'react';
import NavBar from '../components/NavBar';
import '../App.css';
import 'bulma/css/bulma.css'
import Coding_Proyects from '../components/Coding_Proyects';
import Footer from '../components/Footer';
import Button_Back2 from '../components/Button_Back2';

class Coding extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'En este apartado se presentaran todos mis proyectos de programación en distintos lenguajes y tecnologias. \n cuyos proyectos en su mayoria son proyectos personales.'}
    }

    render() {
        return(
            <div className="AplicacionColor">
                <NavBar/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Button_Back2/>
                <p>{this.state.value}</p>
                <Coding_Proyects/>
                <Footer/>
            </div>
        )
    }
}

export default Coding