import {useState} from 'react'


const ItemCount = ({inital, stock, onAdd}) => {
    const [count , setCount] = useState(0)
    function Sumar(){
    
        setCount( count +1 )
    
    }
    
    function Restar (){
        setCount( count - 1)
    }

    return (
        <>
            <section>
                <h1>CLICK PARA AGREGAR AL CARRITO</h1>
                <button onClick={Sumar}>+</button>
                {count}
                <button onClick={Restar}>-</button>
                <button>Agregar al Carrito Ejemplo</button>

            </section>
        </>
    )
}

export default ItemCount
