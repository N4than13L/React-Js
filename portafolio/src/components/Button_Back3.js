import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'

class Button_Back3 extends Component {
    render(){
        return(
            <div className="Buttonsback">
                <Link to='/Art' className="button is-dark">
                    <BiArrowBack/>
                </Link>
            </div>
            
        )
    }
}

export default Button_Back3;