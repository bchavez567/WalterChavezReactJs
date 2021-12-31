import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { ListaProductos } from '../ListaProductos';
import { useParams } from 'react-router-dom';


const ItemListContainer = () =>{

    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);
    const { catIdParams } = useParams(); 
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
                setProductos(ListaProductos.filter(producto => producto.categoria === catIdParams))
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