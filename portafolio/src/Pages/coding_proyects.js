import React,{Component} from 'react'
import NavBar from '../components/NavBar'
import Estudiantes from '../Img/Estudiantes.jpg'
import Estudiantes2 from '../Img/Estudiantes2.png'
import Estudiantes3 from '../Img/Estudiantes3.jpg'
import Estudiantes4 from '../Img/Estudiantes4.jpg'
import Estudiantes5 from '../Img/Estudiantes5.jpg'
import Estudiantes6 from '../Img/Estudiantes6.jpg'
import '../App.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

//import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';
import Button_Back from '../components/Button_Back';

// install Swiper modules
SwiperCore.use([Navigation]);


class Csharp_proyects extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''}
    }
    render(){
        return (
            <section style={{margin: 0, padding: 0, width: '100%'}}>
                <NavBar/>
                <div style={{margin: 69}}></div>
                <Button_Back/>
                <div className="box">
                <Swiper navigation={true} className="mySwiper">
                    <SwiperSlide><img src={Estudiantes}/></SwiperSlide>
                    <SwiperSlide><img src={Estudiantes2}/></SwiperSlide>
                    <SwiperSlide><img src={Estudiantes3}/></SwiperSlide>
                    <SwiperSlide><img src={Estudiantes4}/></SwiperSlide>
                    <SwiperSlide><img src={Estudiantes5}/></SwiperSlide>
                    <SwiperSlide><img src={Estudiantes6}/></SwiperSlide>
                </Swiper>
                <p className="title">{this.state.value = 'Descripcion del proyecto'}</p>
                <p>{
                this.state.value = 'Este proyecto es un CRUD creado en un curso de C# con .NET Core que realizé hace unos meses.'}</p>
                 <p>{
                this.state.value = 'Este proyecto consta en una aplicacion con base de datos en MySQL Server. Anexado a esto el proyecto tiene el patron de diseño de 3 capas.'}</p>
                <p>Codigo en: <a href="https://github.com/N4than13L/Csharp-proyects/tree/master/Estudiantes">Mi cuenta de github.</a></p>
                </div>
                
            </section>
            
        )
    }
}

export default Csharp_proyects;