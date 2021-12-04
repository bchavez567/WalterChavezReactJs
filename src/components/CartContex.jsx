import React ,{createContex, useState} from "react";

export const CartContex = createContex ();

export const CartProviver = (props) =>{
    const [carrito , setCarrito] = useState ([]);
    return (
        <CartContex.Provider value= {[carrito, setCarrito]}>
            {props.children}
        </CartContex.Provider>
    )
}