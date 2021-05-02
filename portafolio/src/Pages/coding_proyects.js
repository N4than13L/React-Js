import React,{Component} from 'react'
import NavBar from '../components/NavBar'
import Estudiantes from '../Img/Estudiantes.jpg'

class Csharp_proyects extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''}
    }
    render(){
        return (
            <section style={{margin: 0, padding: 0, width: '100%'}}>
                <NavBar/>
                <div  style={{margin: 25, padding: 25, width: '95%'}}>
                    <br/>
                    <div className="box">
                    <p className="title"></p>
                        <img src={Estudiantes} style={{width: '100%'}}/>
                    <p style={{fontSize: 25}}>{this.state.value = 'aplicacion de tareas'}</p>
                    <p style={{fontSize:20}}></p>
                </div> 
                </div>
                
            </section>
            
        )
    }
}

export default Csharp_proyects;