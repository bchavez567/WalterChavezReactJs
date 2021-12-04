import React from 'react';
import ItemCount from '../ItemCount';
import { ListaProductos } from '../ListaProductos';
import { Card} from 'react-bootstrap';


export const ItemDetail = ({item}) => {
    console.log('este es el prop de item')
    console.log(item)

    return (
        
        /*<div>
            <img src={item.pictureURL} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <ItemCount stock={item.stock} id={item.id} />
        </div>
        */
        <Card key={item.id}>
            <Card.Img variant="top" src={item.pictureURL} alt={item.title} />
            <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <ItemCount stock={item.stock} id={item.id} />
            </Card.Body>
        </Card>
                    
    )
}