import React,{Component} from 'react'

class Info extends Component{
    constructor(props){
        super(props);
        this.state = {
            Historia:'Es un Estudiante universitario, Artista grafico, dibujante, programador web Font-end, y desarollador de App de escritorio y Backend. Nacido en Valverde Mao, República Dominicana.'}
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
                                <p>ArtStation: <a href="https://www.artstation.com/bonillaartworks"target="Blank">Bonilla ArtWorks</a></p>
                                <p>Instagram: <a href="https://www.instagram.com/bonillajosenathaniel/" target="Blank"> @bonillajosenathaniel</a></p>
                                <p>Youtube: <a href="https://www.youtube.com/channel/UCkgmFcCfaFTfKpGT8qXQdWg" target="Blank"> Bonilla ArtWorks</a></p> 
                            <p>{this.state.Historia}</p>
                        </div>
                    </div>
                </article>
            </div>
            
        )
    }
}

export default Info