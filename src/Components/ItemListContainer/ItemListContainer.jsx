import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = () => {

    function onAdd (cant){
        console.log(cant);
    }


    return (
        <>
            <ItemCount inital ={1} stock={5} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer
