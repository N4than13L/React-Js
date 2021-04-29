import React, { Component} from 'react';
import NavBar from '../components/NavBar';
import '../App.css';
import 'bulma/css/bulma.css'
import Csharp_proyects from '../components/Csharp_proyects';
import Hero from '../components/Hero';

class Coding extends Component {
    render() {
        return(
            <div>
                <NavBar/>
                <Hero/>
                <Csharp_proyects/>
            </div>
        )
    }
}

export default Coding