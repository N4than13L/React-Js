import React, { Component} from 'react'
import '../App.css';
import 'bulma/css/bulma.css'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Experience from '../components/Exprience';
import Footer from '../components/Footer';
import Likes from '../components/Likes';
import Software from '../components/Software';

class Home extends Component{
    render(){
        return(
            <div style={{margin: '0%',padding: '0%', width: '100%'}} className="AplicacionColor">
                <NavBar/>
                <div style={{width:'100%'}}>
                    <Hero/>
                </div>
                
                <div style={{margin: '2%',padding: '2%', width: '95%'}}>
                    <Info/>
                    <Experience/>
                    <Software/>
                    <Likes/>
                </div>
                <Footer/>
                
            </div>
        )
    }
}
export default Home;