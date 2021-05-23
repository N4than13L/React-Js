import React, { Component } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

class Button_Back extends Component {
    render() {
        return(
            <div className="Buttonsback">  
                <Link to="/Coding" className="button is-danger">
                    <BiArrowBack/>
                </Link>
            </div>
        )
    }
}


export default Button_Back