
import { useState, useEffect } from 'react'
import { getFetch } from './Helpers/getFetch';

import NavBar from './Components/NavBar/NavBar';
import ItemCount from './Components/ItemCount/ItemCount';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() { 
    const [products, setProducts] = useState([])  
    const [loading, setLoading] = useState(true)  
    const [bool, setBool] = useState(true)  
    
    useEffect(() => {
        getFetch//api Fetch()
        .then(data => {
            console.log('llamada Api')   
            setProducts(data)  
        })
        //.then(resp => console.log(resp))
        .catch(err => console.log(err))    
        .finally(()=> setLoading(false))
        
        return () => {
            console.log('clean')
        }
    },[])

    return (
        <div className="App">
        <NavBar />
        <ItemCount/>

        { loading ? <h1>Espere por Favor...</h1> :  products.map(prod => <div key={prod.id} className="card w-50 mt-5" >
                                        <div className="card-header">
                                            {prod.name}
                                        </div>
                                        <div className="card-body">
                                            <img src={prod.foto} alt="foto" />
                                            {prod.price}
                                        
                                        </div>
                                        <div className="card-footer">
                                            
                                                <button className="btn btn-outline-primary btn-block">
                                                    detalle de persona
                                                </button>
                                        </div>
                                        
                                    </div> 
        )}



        </div>
    );
}

export default App;
