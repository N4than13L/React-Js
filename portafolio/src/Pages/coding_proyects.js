import React,{Component} from 'react'
import NavBar from '../components/NavBar'
import Estudiantes from '../Img/Estudiantes.jpg'
import Estudiantes2 from '../Img/Estudiantes2.png'
import Estudiantes3 from '../Img/Estudiantes3.jpg'
import Estudiantes4 from '../Img/Estudiantes4.jpg'
import Estudiantes5 from '../Img/Estudiantes5.jpg'
import Estudiantes6 from '../Img/Estudiantes6.jpg'

import Snake from '../Img/Snake.jpg'
import Snake2 from '../Img/Snake2.jpg'


import Convertidor_unidades from '../Img/Convertidor_unidades.jpg'
import Convertidor_unidades2 from '../Img/Convertidor_unidades2.jpg'
import Convertidor_unidades3 from '../Img/Convertidor_unidades3.jpg'

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
import Button_Back from '../components/Button_Back';
import Footer from '../components/Footer'

// install Swiper modules
SwiperCore.use([Navigation]);


class Csharp_proyects extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''}
        //style={{margin:30, padding:30}}
    }
    render(){
        return (
            <section className="AplicacionColor">
                <section>
                <NavBar/>
                <Button_Back/>
                <p>{this.setState.value = "aqui se encuentran los proyects creados tanto en cursos como por mi cuenta con dicha tecnologia."}</p>
                <section className="Organizer">
                    {/* proyecto de aplicacion de alumnos */}
                <div className="box">
                <Swiper navigation={true} className="mySwiper">
                    <SwiperSlide><img src={Estudiantes}/></SwiperSlide>
                    <SwiperSlide><img src={Estudiantes2}/></SwiperSlide>
                    <SwiperSlide><img src={Estudiantes3}/></SwiperSlide>
                    <SwiperSlide><img src={Estudiantes4}/></SwiperSlide>
                    <SwiperSlide><img src={Estudiantes5}/></SwiperSlide>
                    <SwiperSlide><img src={Estudiantes6}/></SwiperSlide>
                </Swiper>
                <p className="title">{this.state.value = 'Descripcion del proyecto:'}</p>
                <p>{
                this.state.value = 'Este proyecto es un CRUD creado en un curso de C# con .NET Core que realizé hace unos meses.'}</p>
                 <p>{
                this.state.value = 'Este proyecto consta en una aplicacion con base de datos en MySQL Server. Anexado a esto el proyecto tiene el patron de diseño de 3 capas.'}</p>
                <p>Codigo en: <a href="https://github.com/N4than13L/Csharp-proyects/tree/master/Estudiantes"  target="Blank">Mi cuenta de github.</a></p>
                </div>
                
                {/*Juego de snake*/}
                <div className="box">
                <Swiper navigation={true} className="mySwiper">
                    <SwiperSlide><img src={Snake}/></SwiperSlide>
                    <SwiperSlide><img src={Snake2}/></SwiperSlide>
                </Swiper>
                <p className="title">{this.state.value = 'Descripcion del proyecto:'}</p>
                <p>{
                this.state.value = 'Este proyecto he creado el mitico juego del Snake (o juego de la serpietne).'}</p>
                <p>Codigo en: <a href="https://github.com/N4than13L/Csharp-proyects/tree/master/Snake_Game" target="Blank">Mi cuenta de github.</a></p>
                </div>

                {/* proyecto de convertidor de unidades*/}

                <div className="box">
                <Swiper navigation={true} className="mySwiper">
                    <SwiperSlide><img src={Convertidor_unidades}/></SwiperSlide>
                    <SwiperSlide><img src={Convertidor_unidades2}/></SwiperSlide>
                    <SwiperSlide><img src={Convertidor_unidades3}/></SwiperSlide>
                    
                </Swiper>
                <p className="title">{this.state.value = 'Descripcion del proyecto:'}</p>
                <p>{
                this.state.value = 'En este proyecto he creado una app para convertir unidades. Utilizando varios formularios como se aprecian en las imagenes.'}</p>
                <p>Codigo en: <a href="https://github.com/N4than13L/Csharp-proyects/tree/master/Convertidor%20de%20unidades" target="Blank">Mi cuenta de github.</a></p>
                </div>
                </section>
                
                </section>
                <Footer/>
            </section>
            
        )
    }
}

export default Csharp_proyects;