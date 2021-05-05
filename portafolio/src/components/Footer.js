import React,{Component} from 'react';
import '../App.css'

class Footer extends Component {
    render(){
        return (
            <footer className="FooterColor" >
                <div className="FooterColor">
                    <strong className="color">
                        <br/>
                        proyectos realizados con las librerias/frameworks
                    </strong>
                    
                    <p className="color">
                            React Js
                    </p>
                    <p className="color">
                        React icons
                    </p>
                    <p className="color">
                        React Router
                    </p>
                    <p className="color">
                        React Swiper
                    </p>

                </div>
            </footer>
        )
    }
}

export default Footer