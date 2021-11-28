import React from 'react';
import { useEffect, useState } from 'react';
import { ListaProductos } from '../ListaProductos';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

const ItemListContainer = () =>{

    const [productoIndividual, setProductoIndividual]= useState({}); 
    const [loading, setLoading] = useState(true);

    const { itemIdParams } = useParams(); 


            useEffect(() => {
                const promesaIndividual = new Promise ((res, rej)=> {
                    setTimeout(()=> {
                        res(ListaProductos.find(producto => producto.id == itemIdParams))
                    }, 2000)
                })
                promesaIndividual.then((prodEncontrado)=>{
                console.log('OK');
                setProductoIndividual(prodEncontrado) 
                })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            }
            )
        }, [itemIdParams])

    console.log(productoIndividual);
    


    return(
    <>
        <p style={{fontSize: 20, color: "black"}}> 
            Lista 
        </p>
        <div style={{display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'}}>
            {loading 
                ? 
            <h1>Está ejecutandose la promesa del detalle</h1> 
                : 
            <ItemDetail item={productoIndividual}/> }
        </div>
    </>
    )
    };

export default ItemListContainer