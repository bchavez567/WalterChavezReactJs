import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/detalle/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';



//import Carrito from './Carrito';
import {CartProviver} from './components/CartContex';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route path="categoria/:catIdParams" element={<ItemListContainer />} />
        <Route path="item/:itemIdParams" element={<ItemListContainer />} />
        {/*<Route exact path = "/carrito" component= {Carrito}/> */}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;