import React, { Component } from 'react'
import {GrMysql} from 'react-icons/gr';
import {SiBlender, SiAdobephotoshop} from 'react-icons/si';
import {DiVisualstudio} from 'react-icons/di';

class Software extends Component {
    render(){
        return (
            <div className="box">
                <p className="title"> Programas y aplicaciones del dia a dia </p>
                <SiAdobephotoshop/>
                <p>Photoshop</p>
                <DiVisualstudio/>
                <p>visual Studio Code</p>
                <SiBlender/>
                <p>Blender</p>
                <GrMysql/>
                <p>MySQL Workbench</p>
                <DiVisualstudio/>
                <p>Visual Studio IDE</p>
                <p>Adobe Fresco</p>
                <p>Davinci resolve</p>
            </div>
            )
        }
}

export default Software