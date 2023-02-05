import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './routes/AppRouter';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter> {/*11) hace que todo lo que esté dentro sea navegable y routeable */}
        <CartProvider> {/*59) envuelte todo con CartProvider para que todos tengan acceso a los valores de cart */}
          <Navbar/> {/* 28) Va por fuera de Routes porque se va a mostrar de forman incondicional y esta dentro de Browser para que se pueda navegar */}
          <AppRouter/>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
