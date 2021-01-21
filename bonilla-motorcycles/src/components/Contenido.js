import React, { Component } from 'react'
import ReactPlayer from 'react-player' 



class Historia extends Component {
    render() {
        return(
            <article className="message is-info">
                <div className="message-header">
                    Historia
                </div>
                <div className="message-body">
                Bonilla Motorcycles es una empresa dedicada a la mecánica de motocicletas y vehículos de 2 ruedas, esta fue fundada el 9 de enero de 2018 por José N. Bonilla. con la pasión e impulso de seguir adelante teniendo en cuenta la accesibilidad de sus productos y su calidad. La idea nació principalmente del hecho de que hay muchas empresas que no proporcionan un estándar de calidad fijo de productos de vehículos de 2 ruedas, ya que es difícil encontrar repuestos asequibles para comprar.
                Los colores del logo:
                rojo: representa la pasión y el espíritu por nuestra vocación como empresa.
                azul: muestra mucho trabajo y dedicación, que al final dará sus frutos.
                blanco: representa el mundo entero por conocer e innovar.
                </div>
            </article>
        );
    }
}


class Mision extends Component {
    render(){
        return(
            <article className="message is-info">
                <div className="message-header">
                Misión
                </div>
                <div className="message-body">
                Una empresa que resuelve los problemas de su motocicleta independientemente de su clase social, política o credo.
                </div>
            </article>
        );
    }    
}

class Vision extends Component {
    render(){
        return(
            <article className="message is-info">
                <div className="message-header">
                Vision
                </div>
                <div className="message-body">
                Ser una empresa con los más altos estándares de calidad en el mercado siendo líder en el negocio.
                </div>
            </article>
        );
    }    
}

class Video extends Component {
    render(){
        return(
            <div style={{alignItems: 'center', margin: 10}}>
                <ReactPlayer
                    controls
                    url='https://photos.google.com/album/AF1QipMMadZar04eH9qCAYb5GWur8LfNTOPRv799DBcs/photo/AF1QipO6O0ZCNkx3W_rrBWeMbgYMmtQzwJUFGpQryphO'
                    width='100%'
                    playing
                />
            </div>
        );
    }    
}

class Valores extends Component {
    render(){
        return(
            <article className="message is-info">
                <div className="message-header">
                Valores
                </div>
                <div className="message-body">
                <p>Responsabilidad.</p>
                <p>pasión.</p>
                <p>Dedicación.</p>
                <p>confiar.</p>
                <p>fidelidad.</p>
                <p>elegancia.</p>
                <p>honestidad.</p>
                </div>
            </article>
        );
    }    
}



export class Contenido extends Component {
    render() {
        return(
            <div className="contenido">
                <Historia/>
                <Video/>
                <Mision/>
                <Vision/>
                <Valores/>
            </div>)
    }
}