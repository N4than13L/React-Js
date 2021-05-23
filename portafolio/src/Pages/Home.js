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
import Art_Knowlege from '../components/Art_Knowlege';
import Chain from '../video/Chain.mp4';

class Home extends Component{
    render(){
        return(
            <div style={{margin: '0%',padding: '0%', width: '100%'}} className="AplicacionColor">
                  <NavBar/>
                  <div><Hero/></div>                  
                <div className="Organizer">
                    <Info/>
                    <Experience/>
                    <Art_Knowlege/>
                    <Software/>
                    <Likes/>
                </div>
                {/*para colocar un video de fondo para cuando sea nescesario y pertinente hacerlo*/}
                {/* <video src={Chain} type='video/mp4'
                autoPlay loop muted style={{position: 'absolute',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '50%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)'
                }}/>
                 */}
                <Footer/>
                
            </div>
        )
    }
}
export default Home;