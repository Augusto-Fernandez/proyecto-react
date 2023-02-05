/*53) Crea Approuter para poder proteger las rutas cuando se quiera consumir un contexto */
import { Routes, Route } from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from "../components/Cart/Cart";

const AppRouter = () =>{
    return(
        <Routes> {/*13) Este comoponente lleva dentro las rutas que se van a renderizar condicionalmente */}
          <Route path='/' element={<ItemListContainer greeting={'Listado de Productos'}/>}/> {/*5) da el prop del greeting */}{/*12) Route se usa para definir una ruta */}
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'}/>}/> {/*21) crea ruta para filtrar productos por categoria*/}
          <Route path='/item/:productId' element={<ItemDetailContainer/>}/> {/*29) Esta ruta va a la descripción del producto*/}
          <Route path='/cart' element={<Cart/>}/>{/*73) crea una nueva ruta para mostrar los productos que están el carrito*/}
        </Routes>
    )
}

export default AppRouter