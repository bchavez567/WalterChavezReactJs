import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={
            {
            padding: "3rem",
            fontSize: "1.5rem", 
            display: "flex", 
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",}}>
                
            <Link to="/">Bendita Sucu</Link>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/categoria/interior">Suculentas</Link> 
                    </li>
                    <li>
                        <Link to="/categoria/exterior">Cactus</Link>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar; 