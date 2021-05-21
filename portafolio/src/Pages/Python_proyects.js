import React,{Component} from 'react'
import Button_Back from '../components/Button_Back';
import NavBar from '../components/NavBar';
import '../App.css'

import Python_downloader from '../Img/Python_downloader.jpg'
import Python_downloader2 from '../Img/Python_downloader2.jpg'
import Python_downloader3 from '../Img/Python_downloader3.jpg'

import Calculadora_py1 from '../Img/Calculadora_py1.jpg'
import Calculadora_py2 from '../Img/Calculadora_py2.jpg'

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

class Python_proyects extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''}
    }
    render(){
        return (
            <section className="AplicacionColor">
                <NavBar/>
                <div className="Buttonsback">
                    <Button_Back/>
                </div>
                
                <p>{this.setState.value = 'En este apartado se encuentran proyectos en python totalmente creados para ejecutarse en la terminal de comandos.'}</p>
                {/*---------------------------------- Python Downloader ------------------------------------------*/}
                <section style={{margin: 5, padding: 10, width: '98%'}}>
                <div className="box">
                <Swiper navigation={true} className="mySwiper">
                    <SwiperSlide><img src={Python_downloader}/></SwiperSlide>
                    <SwiperSlide><img src={Python_downloader2}/></SwiperSlide>
                    <SwiperSlide><img src={Python_downloader3}/></SwiperSlide>
                </Swiper>
                <p className="title">{this.setState.value = 'Descripcion del proyecto:'}</p>
                <p>{
                this.setState.value = 'Script para descargar video e audios.'}</p>
                 <p>{
                this.setState.value = 'Este proyecto consta en un Script en python para poder descargar videos desde youtube usando la libreria de pytube.'}</p>
                <p>Codigo en: <a href="https://github.com/N4than13L/Python-Proyects/tree/master/python%20downloader"  target="Blank">Mi cuenta de github.</a></p>
                </div>

                {/*-----------------------------------------------------------*/}
                <div className="box">
                <Swiper navigation={true} className="mySwiper">
                    <SwiperSlide><img src={Calculadora_py1}/></SwiperSlide>
                    <SwiperSlide><img src={Calculadora_py2}/></SwiperSlide>                    
                </Swiper>
                <p className="title">{this.state.value = 'Descripcion del proyecto:'}</p>
                <p>{
                this.setState.value = 'Este proyecto es un CRUD creado en un curso de C# con .NET Core que realizé hace unos meses.'}</p>
                 <p>{
                this.setState.value = 'Este proyecto consta en una calculadora aritmetica'}</p>
                <p>Codigo en: <a href="https://github.com/N4than13L/Python-Proyects/tree/master/Calculadora"  target="Blank">Mi cuenta de github.</a></p>
                </div>
                
                </section>
                <Footer/>
            </section>

        )
    }
}

export default Python_proyects