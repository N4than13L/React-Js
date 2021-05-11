import React,{Component} from 'react'
import Button_Back from '../components/Button_Back';
import NavBar from '../components/NavBar';
import '../App.css'

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

// import Python_downloader from '../Img/Python_downloader.jpg'

class Python_proyects extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''}
    }
    render(){
        return (
            <section>
                <NavBar/>
                <div className="Buttonsback">
                    <Button_Back/>
                </div>
                <section style={{margin: 5, padding: 10, width: '95%'}}>
                <div className="box">
                <Swiper navigation={true} className="mySwiper">
                    {/* <SwiperSlide><img src={Python_downloader}/></SwiperSlide> */}
                    <SwiperSlide>Slider</SwiperSlide>
                    <SwiperSlide>Slider</SwiperSlide>
                    <SwiperSlide>Slider</SwiperSlide>
                    <SwiperSlide>Slider</SwiperSlide>
                    <SwiperSlide>Slider</SwiperSlide>
                </Swiper>
                <p className="title">{this.state.value = 'Descripcion del proyecto:'}</p>
                <p>{
                this.setState.value = ''}</p>
                 <p>{
                this.setState.value = 'Este proyecto consta en una aplicacion con base de datos en MySQL Server. Anexado a esto el proyecto tiene el patron de diseño de 3 capas.'}</p>
                <p>Codigo en: <a href="https://github.com/N4than13L/Csharp-proyects/tree/master/Estudiantes"  target="Blank">Mi cuenta de github.</a></p>
                </div>
                {/*-----------------------------------------------------------*/}
                <div className="box">
                <Swiper navigation={true} className="mySwiper">
                    <SwiperSlide>Slider</SwiperSlide>
                    <SwiperSlide>Slider</SwiperSlide>
                    <SwiperSlide>Slider</SwiperSlide>
                    <SwiperSlide>Slider</SwiperSlide>
                    <SwiperSlide>Slider</SwiperSlide>
                    <SwiperSlide>Slider</SwiperSlide>
                </Swiper>
                <p className="title">{this.state.value = 'Descripcion del proyecto:'}</p>
                <p>{
                this.setState.value = 'Este proyecto es un CRUD creado en un curso de C# con .NET Core que realizé hace unos meses.'}</p>
                 <p>{
                this.state.value = 'Este proyecto consta en una aplicacion con base de datos en MySQL Server. Anexado a esto el proyecto tiene el patron de diseño de 3 capas.'}</p>
                <p>Codigo en: <a href="https://github.com/N4than13L/Csharp-proyects/tree/master/Estudiantes"  target="Blank">Mi cuenta de github.</a></p>
                </div>
                
                </section>
                <Footer/>
            </section>

        )
    }
}

export default Python_proyects