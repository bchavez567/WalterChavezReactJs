import React, { useContext } from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col} from 'react-bootstrap';
import {CartContex} from '../CartContex'



export default function Item({item , id , image, price, title}) {
    
    console.log(item)

    const [carrito, setCarrito] = useContext (CartContex);
    function agregar (){
        const producto ={
            id:id,
            image:image,
            price:price,
            title:title,
        }

        const temporal = carrito;
        temporal.push(producto);
        setCarrito(temporal);
        console.log(carrito);
    }


    return (
        <Row className="p-4">
                    <Col>
            <Card style={{ width: '18rem' }} key={item.id} >
                <Link to = {'/ListaProductos/'}>
                <Card.Img variant="top" src={item.pictureURL} alt={item.title}/>
                </Link>

                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>$ {item.price} </Card.Text>
                    <Button variant="primary" onClick= {agregar}>Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </Col>
        </Row>

    )
}


