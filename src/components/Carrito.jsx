import React, { useContext, useEffect , useState} from "react";

import NavBar from "./NavBar";

import CartContex from "./CartContex";
import { Container, ListGroup, Row , Col, Image, Nav} from "react-bootstrap";

function Carrito (){

    const [carrito] = useContext(CartContex);
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
        <Nav>
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
        </Nav>
        </>
    )
    
}

export default Carrito;