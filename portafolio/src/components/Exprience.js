import React, { Component } from 'react';
import {SiJavascript, SiPython, SiCsharp, SiMicrosoftoffice} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3Full, DiMysql} from 'react-icons/di';
import {BsCameraVideo} from 'react-icons/bs'

class Experience extends Component {
    render(){
        return (
            <div className="box">
                <h1 className="title">
                    Conocimentos Tecnicos en informatica
                </h1>
                <SiMicrosoftoffice/>
                <p>Manejo de programas de Ofimatica</p>
                <p>Nivel de experiencia:</p>
                <progress className="progress is-dark" value="70" max="100">40</progress>

                <SiJavascript/>
                <p>JavaScript</p>
                <p>Nivel de experiencia:</p>
                <progress class="progress is-warning" value="45" max="100">40%</progress>
                <AiFillHtml5/>
                <p>HTML</p>
                <p>Nivel de experiencia:</p>
                <progress class="progress is-danger" value="55" max="100">40%</progress>
                <DiCss3Full/>
                <p>CSS</p>
                <p>Nivel de experiencia:</p>
                <progress class="progress is-info" value="25" max="100">40%</progress>
                <SiPython/>
                <p>Python</p>
                <p>Nivel de experiencia:</p>
                <progress class="progress is-success" value="45" max="100">40%</progress>
                <SiCsharp/>
                <p>C#</p>
                <p>Experiencia:</p>
                <progress class="progress is-link" value="50" max="100">40%</progress>
                <DiMysql/>
                <p>MySQL</p>
                <p>Nivel de experiencia:</p>
                <progress class="progress" style={{background: 'purple'}} value="45" max="100">40%</progress>
            </div>
        );
    }
}

export default Experience;