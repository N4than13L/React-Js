import React, { Component } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

class Button_Back extends Component {
    render() {
        return(
            <div style={{padding: 5, padding: 20}}>  
                <Link to="/Coding" className="button is-info">
                    <BiArrowBack/>
                </Link>
            </div>
        )
    }
}


export default Button_Back