import React, { Component } from 'react';
import Estudiantes from '../Img/Estudiantes.jpg';
import Snake from '../Img/Snake.jpg';

class Csharp_proyects extends Component {
    constructor(props){
        super(props)
        this.state = {value: 'descripcion del proyecto'}
    }

    render(){
        return(
            <section>
                <br/>
                <p className="title"> Proyectos</p>
                <div className="box">
                    <div className="box">
                        <h2>{this.state.value='Estudiantes'}</h2>
                        <img src={Estudiantes}/>
                        <p>{this.state.value}</p>
                        <p>En este proyecto he creado un CRUD para enlistar estudiantes
                            en una masterclass de C# con .NET Core de microsoft
                        </p>
                        <a href="https://github.com/N4than13L/Csharp-proyects/tree/master/Estudiantes" target="blank">Codigo Fuente</a>
                    </div>
                </div>
                {/* aplicaciones  */}
                <div className="box">
                    <div className="box">
                        <h2>{this.state.value='Snake Game'}</h2>
                        <img src={Snake}/>
                        <p>{this.state.value}</p>
                        <h2></h2>
                        <p>En este proyecto he creado u juego de snake en C#. 
                            practicando la programacion orientada a objetos (POO)
                        </p>
                        <a href="https://github.com/N4than13L/Csharp-proyects/tree/master/Snake_Game" target="blank">Codigo Fuente</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Csharp_proyects;