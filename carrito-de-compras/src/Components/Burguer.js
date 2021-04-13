import React from "react";

const Burguer = ({burger, cart, setCart, burgers}) => {

    // constante que guarda la propiedades del estado de las burguers. 
    const {nombre, precio, id} = burger;

    //funcion para agragar burgers al carrito.
    const addBurguer = (id) => {
        const burger = burgers.filter((burger) => burger.id === id)
        setCart([...cart, ...burger])

    };

        return(
            <div>
                <ul>
                    <li>{nombre}</li>
                    <li>{precio}</li>
                    <button type="button" onClick={() => addBurguer(id)}>
                        Agregar al carrito
                        </button> 
                </ul>
            </div>
        );

};

export default Burguer;