import React, { Component } from 'react'
import '../App.css'

class Motos extends Component {
    render(){
        return(
            <div style={{margin:10}} >
                <article className="message is-danger">
                <div className="message-header">
                    Motos
                </div>
                <div className="message-body">
                    <div style={{display: "flex"}}>
                        <figure style={{width:1200}}>
                            <img src="https://bd.gaadicdn.com/processedimages/bmw/s1000rr/source/s1000rr5e57677f61f20.jpg?tr=w-360"/>
                            <p>BMW 1000RR</p>
                            <button className="button is-ghost">Ir</button>
                            <button className="button is-warning">Al carrito</button>
                        </figure>
                        <figure style={{width:1400}}>
                                <img src="https://i.blogs.es/24a60c/honda-cbr1000rr-r-sp-fireblade-2020-014/1366_2000.jpg"/>
                                <p>Honda cbr 1000</p>
                                <button className="button is-ghost">Ir</button>
                                 <button className="button is-warning">Al carrito</button>
                        </figure>
                        <figure style={{width:1800}}>
                                <img src="https://timeless2wheels.com/wp-content/uploads/2020/03/MV-Agusta-750-S.jpg"/>
                                <p>Mv augusta f4</p>
                                <button className="button is-ghost">Ir</button>
                                <button className="button is-warning">Al carrito</button>
                        </figure>
                        <figure style={{width:1900}}>
                                <img src="https://5.imimg.com/data5/DQ/BR/GLADMIN-68154388/kawasaki-z1000-r-bike-500x500.jpg"/>
                                <p>kawasaki z1000</p>
                                <button className="button is-ghost">Ir</button>
                                <button className="button is-warning">Al carrito</button>
                        </figure>
                        <figure style={{width:2000}}>
                                <img src="https://imgd.aeplcdn.com/1200x900/bw/models/kawasaki-ninja-zx10r-standard20200803234656.jpg"/>
                                <p>kawasaki ninja zx10r</p>
                                <button className="button is-ghost">Ir</button>
                                <button className="button is-warning">Al carrito</button>
                        </figure>  
                    </div>
                </div> 
            </article>
            
                <article className="message is-success">
                <div className="message-header">
                    cuatrimotos
                </div>
                <div className="message-body"> 
                    <div style={{display: 'flex'}}>
                    <figure style={{width:1200}}>
                        <img src="https://cdp.azureedge.net/products/USA/CA/2020/ATV/ATVSPORT/RENEGADE_X_MR_1000R/50/IRON_GRAY_AND_MANTA_GREEN/2000000001.jpg"/>
                        <p>Can-Am Renegade X</p>
                        <button className="button is-ghost">Ir</button>
                        <button className="button is-warning">Al carrito</button>
                        </figure>
                    <figure style={{width:1400}}>
                        <img src="https://www.discountatvsale.com/image/cache/data/Polaris/16-650x450.jpg"/>
                        <p>Polaris SPORTSMAN XP 1000 S</p>
                        <button className="button is-ghost">Ir</button>
                        <button className="button is-warning">Al carrito</button>
                    </figure>
                    <figure style={{width:1800}}>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/Automotive/Entity/CRS/v1/2017_ArcticCat_Alterra1000_TRVXT._CB485928941_.jpg"/>
                        <p>Arctic Cat TRV</p>
                        <button className="button is-ghost">Ir</button>
                        <button className="button is-warning">Al carrito</button>
                    </figure>
                    <figure style={{width:1900}}>
                        <img src="https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YFM450FWBDDL/2020-Yamaha-YFM450FWBDDL-EU-Olive_Green-Static-004-03.jpg"/>
                        <p>Yamaha Kodiak 450</p>
                        <button className="button is-ghost">Ir</button>
                        <button className="button is-warning">Al carrito</button>
                    </figure>
                    <figure style={{width:2000}}>
                        <img src="https://psmfirestorm.blob.core.windows.net/crs-images/318161/22653/original.jpg"/>
                        <p>SUZUKI KINGQUAD</p>
                        <button className="button is-ghost">Ir</button>
                        <button className="button is-warning">Al carrito</button>
                    </figure>
                    </div>
                </div>
            </article>

                <article className="message is-warning">
                <div className="message-header">
                    scotters
                </div>
                <div className="message-body"> 

                </div>
            </article>
        </div> 
        );
    }
}

export class Productos extends Component{
    render(){
        return(
            <div>
                <Motos/>
            </div>
        )
    }
}