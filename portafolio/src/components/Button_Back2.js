import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { BiArrowBack } from 'react-icons/bi'

export default class Buttn_Back2 extends Component{
    render() {
        return(
            <Link to="/" className="button is-info">
                <BiArrowBack/>
            </Link>
        );
    }
}