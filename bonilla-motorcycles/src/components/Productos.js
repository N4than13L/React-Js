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
                            <div style={{display: "flex" }}>
                                <figure>
                                    <img src="https://i.pinimg.com/236x/97/55/f8/9755f8ea89a56bac423b0a4d357ee55c--google-search-custom-motorcycles.jpg"/>
                                    <p>LLanta de 20 pulgadas para moto 125 </p>
                                    <button className="button is-ghost">Ir</button>
                                    <button className="button is-warning">Al carrito</button>
                                </figure>
                                <figure>
                                    <img 
                                    style={{width:135}}
                                    src="data:image/jpeg;base64,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"/>
                                    
                                    <p>LLanta de 3pulgadas para moto 250 </p>
                                    <button className="button is-ghost">Ir</button>
                                    <button className="button is-warning">Al carrito</button>
                                </figure>
                                <figure>
                                    <img 
                                    style={{width:180, margin:-10}}
                                    src="https://cdn.shopify.com/s/files/1/1214/3802/products/Dymag-Carbon-Race-CA5-Wheels.jpg666_8711e1d8-de24-4950-b581-1739a6a393d5_1024x1024.jpg?v=1503409875" />
                                    <p>LLanta para moto pesada harley-davidson</p>
                                    <button className="button is-ghost">Ir</button>
                                    <button className="button is-warning">Al carrito</button>
                                </figure>
                                <figure>
                                    <img 
                                    style={{width:180}}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFkIxbDyWwS7kr3GIAdFkICNsIsg2luD6uQ&usqp=CAU" />
                                    <p>LLanta para moto Custom</p>
                                    <button className="button is-ghost">Ir</button>
                                    <button className="button is-warning">Al carrito</button>
                                </figure>
                                <figure>
                                    <img 
                                    style={{width:180, margin:10 }}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNN-kOX8VGkCsxS3YsbO8WIbseIYhn7o7oA&usqp=CAU" />
                                    <p>rines de moto de honda supercub 50</p>
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