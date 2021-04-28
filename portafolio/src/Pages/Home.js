import React, { Component} from 'react'
import '../App.css';
import 'bulma/css/bulma.css'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Experience from '../components/Exprience';
import Footer from '../components/Footer';

class Home extends Component{
    render(){
        return(
            <div className="">
                <NavBar/>
                <Hero/>
                <Info/>
                <Experience/>
                <Footer/>
            </div>
        )
    }
}
export default Home;