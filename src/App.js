import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter> {/*11) hace que todo lo que esté dentro sea navegable y routeable */}
        <Navbar/> {/* 28) Va por fuera de Routes porque se va a mostrar de forman incondicional y esta dentro de Browser para que se pueda navegar */}
        <Routes> {/*13) Este comoponente lleva dentro las rutas que se van a renderizar condicionalmente */}
          <Route path='/' element={<ItemListContainer greeting={'Listado de Productos'}/>}/> {/*5) da el prop del greeting */}{/*12) Route se usa para definir una ruta */}
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'}/>}/> {/*21) crea ruta para filtrar productos por categoria*/}
          <Route path='/item/:productId' element={<ItemDetailContainer/>}/> {/*29) Esta ruta va a la descripción del producto*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
