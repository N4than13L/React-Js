import React, { Component } from 'react';

class Experience extends Component {
    render(){
        return (
            <div className="box">
                <h1 className="title">
                    Conocimentos Tecnicos en informatica
                </h1>
                <p>Manejo de programas de Ofimatica</p>
                <p>Nivel de experiencia:</p>
                <progress className="progress is-dark" value="70" max="100">40</progress>

                <p>JavaScript</p>
                <p>Nivel de experiencia:</p>
                <progress class="progress is-warning" value="45" max="100">40%</progress>

                <p>HTML</p>
                <p>Nivel de experiencia:</p>
                <progress class="progress is-danger" value="55" max="100">40%</progress>

                <p>CSS</p>
                <p>Nivel de experiencia:</p>
                <progress class="progress is-info" value="25" max="100">40%</progress>
                
                <p>Python</p>
                <p>Nivel de experiencia:</p>
                <progress class="progress is-success" value="45" max="100">40%</progress>

                <p>C#</p>
                <p>Experiencia:</p>
                <progress class="progress is-link" value="50" max="100">40%</progress>

                <p>MySQL</p>
                <p>Nivel de experiencia:</p>
                <progress class="progress" style={{background: 'purple'}} value="45" max="100">40%</progress>
                <br/>

                <h1 className="title">Conocimentos en Arte diginal</h1>
                <p>Mattepainting y photoretoque</p>
                <p>render en 3d</p>
                <p>Dibujo tradicional/digital</p>
            </div>
        );
    }
}

export default Experience;