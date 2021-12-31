import React ,{useState, CartContex} from "react";


export const CartProviver = (props) =>{
    const [carrito , setCarrito] = useState ([]);
    return (
        <CartContex.Provider value= {[carrito, setCarrito]}>
            {props.children}
        </CartContex.Provider>
    )
}

export default CartContex;
