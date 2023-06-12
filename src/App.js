
import { HashRouter, Routes, Route } from 'react-router-dom';
import Categorias from './Components/Categorias';
import EditCategories from './Components/EditCategories';
import Navbar from './Components/Navbar';
import Bienvenida from './Components/Bienvenida';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Bienvenida></Bienvenida>} />
          <Route path='/categorias' element={<Categorias></Categorias>} />
          <Route path='/categorias/:id' element={<EditCategories></EditCategories>} />
        </Routes>


      </HashRouter>


    </>
  );
}

export default App;
