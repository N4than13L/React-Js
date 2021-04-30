import React,{Component} from 'react';
import { FiInstagram, FiYoutube } from 'react-icons/fi';

class Footer extends Component {
    render(){
        return (
            <footer className="footer" style={{background: 'black'}}>
                <div style={{padding:2, margin:2, fontColor: 'white'}}>
                  <a href="#" target="Blank">@bonillajosenathaniel<FiInstagram style={{width:35, height:30}}/></a>
                  <br/>
                  <a href="#" target="Blank">Bonilla ArtWorks<FiYoutube style={{width:35, height:30}}/></a>  
                </div>
            </footer>
        )
    }
}

export default Footer