import React,{Component} from 'react'

class Info extends Component{
    constructor(props){
        super(props);
        this.state = {
            Historia:'Es un Estudiante universitario, Artista grafico autodidacta, programador web Font-end con React js, y desarollador de App de escritorio con C#. Nacido en República Dominicana'}
        }
            render(){
        return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://media.tenor.com/images/8d5c2b4b20e52499a6a46b5be53e7718/tenor.png" alt="Imagen"/>
                    </figure>
                </div>

                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>José Nathaniel Bonilla</strong></p>
                            <a href="https://www.artstation.com/bonillaartworks"target="Blank">Bonilla ArtWorks</a>
                            <a href="#" target="Blank"> @bonillajosenathaniels</a>
                            <br/>
                            <a href="#" target="Blank"> Bonilla ArtWorks</a> 
                        <p>{this.state.Historia}</p>
                         
                    </div>
                </div>
            </article>
        </div>
        )
    }
}

export default Info