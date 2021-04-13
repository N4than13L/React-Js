import React,{ Fragment, useState } from "react";
import Burguer from "./Components/Burguer"
import Cart from "./Components/Cart"

function App() {

  // estado de hamburguesas con listado de hamburguesas.
  const [hamburgesas, setHamburguesas] = useState([
    {id:  1, nombre: "Hamburguesa completa", precio: 250},
    {id:  2, nombre: "Hamburguesa de queso", precio: 220},
    {id:  3, nombre: "Hamburguesa simple", precio: 150},
    {id:  4, nombre: "Hamburguesa con jamon", precio: 350},
    {id:  5, nombre: "Hamburguesa de pollo", precio: 100}
  ])

// estado del carrito
const [cart, setCart] = useState([])
  return (
    <Fragment>
      {hamburgesas.map((burguer) => (
        <Burguer
          key={hamburgesas.id}
          hamburgesas = {hamburgesas}
          cart = {cart}
          setCart = {setCart}
          burguer = {burguer}
        />
        
        ))}

        <Cart
          cart={cart}
          setCart={setCart}
        />
    </Fragment>
  );
}

export default App;
