import React,{Component} from 'react'
import NavBar from '../components/NavBar'
import Estudiantes from '../Img/Estudiantes.jpg'
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
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
                <p className="title">{this.state.value = 'Descripcion del proyecto'}</p>
                </div>
                
            </section>
            
        )
    }
}

export default Csharp_proyects;