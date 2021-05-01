import React, { Component} from 'react';
import NavBar from '../components/NavBar';
import '../App.css';
import 'bulma/css/bulma.css'
import Coding_Proyects from '../components/Coding_Proyects';
import Footer from '../components/Footer';

class Coding extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'En este apartado se presentaran todos mis proyectos de programación en distintos lenguajes y tecnologias'}
    }

    render() {
        return(
            <div className="AplicacionColor">
                <NavBar/>
                <p style={{margin:35, padding: 30}}>{this.state.value}</p>
                <Coding_Proyects/>
                <Footer/>
            </div>
        )
    }
}

export default Coding