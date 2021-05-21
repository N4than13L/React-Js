import React, { Component } from 'react';
import Button_Back from '../components/Button_Back';
import NavBar from '../components/NavBar';

// Imagenes de mi promera pagina web.
import Bonilla_m1 from '../Img/Bonilla_m1.jpg';
import Bonilla_m2 from '../Img/Bonilla_m2.jpg';
import Bonilla_m3 from '../Img/Bonilla_m3.jpg';

// imagenes de aplicaion de buscador de peliculas.
import Movies_app1 from '../Img/Movies_app1.jpg';
import Movies_app2 from '../Img/Movies_app2.jpg';
import Movies_app3 from '../Img/Movies_app3.jpg';
import Movies_app4 from '../Img/Movies_app4.jpg';
import Movies_app5 from '../Img/Movies_app5.jpg';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

//import "./styles.css";
import '../App.css'

// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

import Footer from '../components/Footer'

// install Swiper modules
SwiperCore.use([Navigation]);

class Paginas_Web extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }
    render() {
        return(
            <section className="AplicacionColor">
                <NavBar/>
                <br/>
                <br/>
                <br/>
                <Button_Back/>
                <p>{this.setState.value = 'En este apartado se encuentran las paginas/ aplicaciones web creadas tanto en HTML, CSS y JavaScript como tambien las aplicaciones en React JS'}</p>

                <section style={{margin: 5, padding: 10, width: '98%'}}>
                <div className="box">
                <Swiper navigation={true} className="mySwiper">
                    <SwiperSlide><img src={Bonilla_m1}/></SwiperSlide>
                    <SwiperSlide><img src={Bonilla_m2}/></SwiperSlide>
                    <SwiperSlide><img src={Bonilla_m3}/></SwiperSlide>
                </Swiper>
                <p className="title">{this.setState.value = 'Descripcion del proyecto:'}</p>
                <p>{
                this.setState.value = 'Primera Pagina Web de una tienda de motos. Creada con Html y Css'}</p>
                <p>Codigo en: <a href="https://github.com/N4than13L/Mi-Primera-web" target="Blank">Mi cuenta de github.</a></p>
                </div>
                </section>

                <section style={{margin: 5, padding: 10, width: '98%'}}>
                <div className="box">
                <Swiper navigation={true} className="mySwiper">
                    <SwiperSlide><img src={Movies_app1}/></SwiperSlide>
                    <SwiperSlide><img src={Movies_app2}/></SwiperSlide>
                    <SwiperSlide><img src={Movies_app3}/></SwiperSlide>
                    <SwiperSlide><img src={Movies_app4}/></SwiperSlide>
                    <SwiperSlide><img src={Movies_app5}/></SwiperSlide>
                </Swiper>
                <p className="title">{this.setState.value = 'Descripcion del proyecto:'}</p>
                <p>{
                this.setState.value = 'Aplicacion web desarrollada en un curso de desarrollo con React Js desde 0 a nivel intermedio. '}</p>
                <p>Codigo en: <a href="https://github.com/N4than13L/React-Js/tree/master/movies-app" target="Blank">Mi cuenta de github.</a></p>
                </div>
                </section>
                <Footer/>
            </section>
        )
    }
}


export default Paginas_Web;