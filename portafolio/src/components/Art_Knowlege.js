import React,{Component} from 'react'

class Art_Knowlege extends Component {
    render(){
        return(
            <div className="box">
                <h1 className="title">Conocimentos en Arte diginal.</h1>
                <p>Mattepainting y photoretoque.</p>
                <p>Nivel de experiencia:</p>
                <progress class="progress is-success" value="45" max="100">40%</progress>

                <p>render en 3D.</p>
                <p>Nivel de experiencia:</p>
                <progress class="progress is-info" value="25" max="100">40%</progress>

                <p>Dibujo tradicional/digital.</p>
                <p>Nivel de experiencia:</p>
                <progress class="progress is-danger" value="45" max="100">40%</progress>

            </div>
        )
    }
}

export default Art_Knowlege;