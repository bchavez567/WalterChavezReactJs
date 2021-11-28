import React from 'react'

export const ItemList = ({items}) => {
    return (
        <div className="card-colums">
            <>
            { items.map((item)=>
                <item key =  {item.id} item = {item} />
            })}
            </>
        </div>
);