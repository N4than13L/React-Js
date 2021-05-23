import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { BiArrowBack } from 'react-icons/bi'

export default class Button_Back2 extends Component{
    render() {
        return(
            <div className="Buttonsback">
                 <Link to="/" className="button is-warning">
                    <BiArrowBack/>
                </Link>
            </div>
           
        );
    }
}