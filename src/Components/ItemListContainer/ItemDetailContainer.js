import ItemsPromise from "../Utils/mockItems";
import React {usaSate, useEffect} from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

const objItem = {
    Id : "1",
    title: "gorra",
    img :"#",
};


const ItemListContainer = () => {
    const [ item , setItem] = useState ({});
    const {id} = useParams();
    
    useEffect(() => {
        ItemsPromise.then((resp) => {
            setItem(resp.find((li) => li.id === id));
        });
    }, []);

    return (
        <>
        < itemDetail item = {item}/>
        </>
    )


}