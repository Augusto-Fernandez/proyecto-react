import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/* import ItemCount from './components/ItemCount/ItemCount'*/
/* <ItemCount onAdd={(count) => console.log('se agregaron '+count)} stock={10}/>*/

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenido"/>
    </div>
  );
}

export default App;
