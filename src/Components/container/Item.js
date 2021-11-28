import React from 'react';
import ItemCount from '../ItemCount';



export default function Item({item}) {

    console.log('este es el prop de item' + item)
    console.log(item)

    return (


        <div className = "container-fluid d-flex justify-content-center">
            <li key={item.id}>
                <div className="row">
                    <div className="col-md-4">
                        <img src={item.pictureURL} alt={item.title} />
                    </div>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <ItemCount stock={item.stock} id={item.id} />
                    </div>
                </div> 
            </li>
        </div>

    )
    
}
