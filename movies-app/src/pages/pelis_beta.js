import React, { Component } from 'react';


class Peliculas1 extends Component{
    render(){
        return(
            <section style={{display: 'flex', position:'absolue'}}>
                <div className="card" style={{width:500, height:700, margin:12}}>
                <div className="card-image">
                    <figure>
                        <img 
                        src='https://blenderartists.org/uploads/default/original/4X/b/8/7/b876a6560a5663fbfc551b37c5eefa1ad3719f1e.jpeg'
                        style={{width:700}} alt=''/>
                        <p className='title is-4'> Queen`s Gambit</p>
                        <p className='title is-6'> Actors: Anya Taylor-Joy, Chloe Pirrie, Bill, Camp, Marcin dorocininski </p>
                        <p style={{ position:'relative'}}>23 de octubre de 2020</p>
                    </figure>
                </div>  
            </div>

            <div className="card" style={{width:500, height:700, margin:12}}>
                <div className="card-image">
                    <figure>
                        <img src='https://images-na.ssl-images-amazon.com/images/I/91e4MFVbu8L._AC_SL1500_.jpg'
                         style={{width:400}} alt=''/>
                        <p className='title is-4'>duro de matar</p>
                        <p style={{ position:'relative'}}>22 de junio de 2007</p>
                    </figure>
                </div>  
            </div>

            <div className="card" style={{width:500, height:700, margin:12}}>
                <div className="card-image">
                    <figure>
                        <img src='https://i.pinimg.com/originals/9f/75/f6/9f75f696cc69e4186bd3a1227d2fd48e.jpg'
                         style={{width:375}} alt=''/>
                        <p className='title is-4'>Matrix </p>
                        <p style={{ position:'relative'}}>31 de marzo de 1999</p>
                    </figure>
                </div>  
            </div>
        </section>
        )
    }
}

class Peliculas2 extends Component {
    render() {
        return(
        <section style={{display: 'flex', position:'absolue'}}>
            <div className="card" style={{width:500, height:700, margin:12}}>
                <div className="card-image">
                    <figure>
                        <img src='https://i.pinimg.com/originals/4c/1e/8f/4c1e8f15052f85fb0a6a2dc8b67e6b8b.jpg'
                         style={{width:375}} alt=''/>
                        <p className='title is-4'>Act of valor  </p>
                        <p style={{ position:'relative'}}>24 de febrero de 2012</p>
                    </figure>
                </div>  
            </div>

            <div className="card" style={{width:500, height:700, margin:12}}>
                <div className="card-image">
                    <figure>
                        <img src='https://images-na.ssl-images-amazon.com/images/I/71cXJxcJJPL._AC_SY679_.jpg'
                         style={{width:375}} alt=''/>
                        <p className='title is-4'>Black hawk dawn </p>
                        <p style={{ position:'relative'}}>18 de diciembre de 2001</p>
                    </figure>
                </div>  
            </div>

            <div className="card" style={{width:500, height:700, margin:12}}>
                <div className="card-image">
                    <figure>
                        <img src='https://i.pinimg.com/originals/bd/12/e7/bd12e7a005da70054b8d0d56d2e9f516.jpg'
                         style={{width:375}} alt=''/>
                        <p className='title is-4'>joyeux noël</p>
                        <p style={{ position:'relative'}}>Disponible el 25 de enero de 2021.gi</p>
                    </figure>
                </div>  
            </div>
        </section>
        )
    }
}

export class Pelis_beta extends Component {
    render() {
        return(
            <section>
                <Peliculas1/>
                <Peliculas2/>
            </section>
            
        )
    }
}
