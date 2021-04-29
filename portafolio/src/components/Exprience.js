import React, { Component } from 'react';

class Experience extends Component {
    render(){
        return (
            <div className="box">
                <h1 className="title">
                    Conocimentos Tecnicos en informatica
                </h1>
                <p>Manejo de programas de Ofimatica</p>
                <progress className="progress is-dark" value="70" max="100">40</progress>

                <p>JavaScript</p>
                <progress class="progress is-warning" value="45" max="100">40%</progress>

                <p>HTML</p>
                <progress class="progress is-danger" value="55" max="100">40%</progress>

                <p>CSS</p>
                <progress class="progress is-info" value="25" max="100">40%</progress>
                
                <p>Python</p>
                <progress class="progress is-success" value="45" max="100">40%</progress>

                <p>C#</p>
                <progress class="progress is-link" value="50" max="100">40%</progress>

                <p>MySQL</p>
                <progress class="progress is-light" value="45" max="100">40%</progress>
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