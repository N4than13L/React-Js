import React from "react"
import Burguer from "./Burguer"

const Cart = ({cart, setCart}) => {
    return(
        <div>
            <h3>Carrito</h3>
            {cart.length === 0 ? (
                <p>0</p>
            ) : (
                cart.map((burguer) => (
                    <Burguer
                        key={burguer.id}
                        burguer={burguer}
                        cart={cart}
                        setCart={setCart}
                    />
            ))
        )}
        </div>
    );
};
export default Cart;