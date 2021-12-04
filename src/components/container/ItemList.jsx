import React from 'react';
import Item from './Item';


export default function ItemList(props) {

    console.log('este es el props.lista' + props.lista);
    console.log(props.lista)


    return (
        <div style={{ width: '100%' }}>
            {props.lista.map((item, index) => {
                return (
                    <Item key={index} item={item} />
                )
            })}
        </div>
    )
};

