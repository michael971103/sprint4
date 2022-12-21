import '../App.css';
import NavbarLayout from '../layouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productos from '../pages/Productos';
import Inventarios from '../pages/Inventarios';
import Home from '../pages/Home';

function App() {

  return (
    <div className="App">
      <NavbarLayout></NavbarLayout>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home></Home>}/> 
            <Route path='/productos' element={<Productos></Productos>}/> 
            <Route path='/inventarios' element={<Inventarios></Inventarios>}/>        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;