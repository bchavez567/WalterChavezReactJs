import React, { useContext, useEffect } from "react";

import NavBar from "./NavBar";

import {cartContex} from '../components/CartContex';
import { Container, ListGroup, Row } from "react-bootstrap";

function Carrito (){

    const [carrito] = useContext(cartContex);
    let [total , setTotal] = useState (0);

    useEffect (()=>{
        let temp = 0 ;
        carrito.map((item)=>{
            temp = temp + item.price;
        })
        setTotal(temp)
    },[])

    return (

        <> 
        <Navegacion>
        <Container> 
        {  carrito. map ((item)=>{
            return (
                <ListGroup>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={item.image}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <h1>{item.title}</h1>
                        </Col>
                        <Col xs={6} md={4}>
                            {item.price}
                        </Col>
                    </Row>
                </ListGroup>
            )
        })}
        <h1>Total a pagar ; {total}</h1>
        </Container>
        </Navegacion>
        </>
    
    )







}