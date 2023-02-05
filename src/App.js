import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter> {/*11) hace que todo lo que esté dentro sea navegable y routeable */}
        <Navbar/> {/* 28) Va por fuera de Routes porque se va a mostrar de forman incondicional y esta dentro de Browser para que se pueda navegar */}
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
