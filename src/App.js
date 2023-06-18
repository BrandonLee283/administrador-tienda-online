
import { HashRouter, Routes, Route } from 'react-router-dom';
import Categorias from './Components/Categorias';
import EditCategories from './Components/EditCategories';
import Navbar from './Components/Navbar';
import Bienvenida from './Components/Bienvenida';
import Productos from './Components/Productos';
import EditProducts from './Components/EditProducts';
import AddCategorias from './Components/AddCategorias';
import AddProductos from './Components/AddProductos';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path='/bienvenida' element={<Bienvenida></Bienvenida>} />
          <Route path='/categorias' element={<Categorias></Categorias>} />
          <Route path='/categorias/:id' element={<EditCategories></EditCategories>} />
          <Route path='/productos' element={<Productos></Productos>} />
          <Route path='/productos/:id' element={<EditProducts></EditProducts>} />

          <Route path='/addCategorias' element={<AddCategorias></AddCategorias>}/>
          <Route path='/addProductos' element={<AddProductos></AddProductos>}></Route>

        </Routes>


      </HashRouter>


    </>
  );
}

export default App;
