import { useState } from "react";
import ItemsPromise from "../Utils/mockItems";
import { ItemList } from "./ItemList";


export default function ItemListContainer({ geeating}) {
    const[ prod, setProd] = useState ([]);
    const {categoryId } = useState ([]);

    useEffect(() => {
        ItemsPromise
        .then((resp)=>{
            if ( categoryId === undefined){
                setProd(res);
            } else {
                setProd(res.filter(res)=> res.categoria === categoryId)
            }
        })
    }, [categoryId])


}