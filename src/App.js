import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/* import ItemCount from './components/ItemCount/ItemCount'*/
/* <ItemCount onAdd={(count) => console.log('se agregaron '+count)} stock={10}/>*/
/* <Route path='/item/:productId' element={<ItemDetailContainer/>}/> */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
