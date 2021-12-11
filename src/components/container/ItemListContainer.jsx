import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { ListaProductos } from '../ListaProductos';
import { useParams } from 'react-router-dom';


const ItemListContainer = () =>{

    //si vamos a hacer un pedido de productos, que nos va a traer un array, tenemos que persistir ese array en el estado porque sino cada vez que renderizamos el componente, Me va a pisar el array y voy a tener que estar llamando a la API nuevamente (eso es super costoso)
    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);
    const { catIdParams } = useParams(); //tomo el params de la url y lo guardo en una variable.
    //La promesa la pueden hacer en un helper... yo la hago acá para que se note bien bien el patrón de que el container hace el pedido. 
    useEffect(() => {
        const promesa = new Promise ((res, rej)=> {
            setLoading(true);
            setTimeout(()=> {
                res(ListaProductos)
            }, 2000)
        })
            if(catIdParams){
                promesa.then((ListaProductos)=>{
                console.log('OK el filtrado');
                setProductos(ListaProductos.filter(producto => producto.categoria === catIdParams)) //aca lo comparo de modo estricto porque la categoria de mi lista es String y el params también es String
            })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            }
            )
        } else {
            promesa.then((ListaProductos)=>{
                console.log('OK sin filtrar');
                setProductos(ListaProductos)
            })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            })
        }}, [catIdParams])
     //el segundo parámetro es la dependencia de la variable id, porque si cambia el id, se ejecuta el useEffect de vuelta para pedirme nuevamente la lista de productos de esa categoria.
    console.log(productos)
    



    return(
    <>
        <p style={{fontSize: 20, color: "black"}}> 
            Lista 
        </p>
        <div style={{display: 'grid',
                flexDirection: 'row',
                alignItems: 'center'}}>
            {loading 
                ? 
            <h1>Está ejecutandose la promesa</h1> 
                : 
            <ItemList lista={productos}/> }
        </div>
    </>
    )
    };

export default ItemListContainer