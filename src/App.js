import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowProducts from './view/Product/ShowProducts';
import CreateProduct from './view/Product/CreateProduct';
import EditProduct from './view/Product/EditProduct';
import MenuUser from './layouts/MenuUser';
import Dashboard from './view/Home/Dashboard';
import Login from './view/Auth/Login';
import About from './components/About';
import Card from './components/Card';
import Cv from './view/Home/Cv';

function App() {

  const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const BootstrapCard = () => {
        const [expanded, setExpanded] = React.useState(false);
    
        const handleExpandClick = () => {
            setExpanded(!expanded);
        };
    }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/card' element={<Card />} />
          <Route path='/cv' element={<Cv />} />
          <Route path='/MenuUser' element={<MenuUser />} />
          <Route path='/show' element={<ShowProducts />} />
          <Route path='/create' element={<CreateProduct />} />
          <Route path='/edit/:id' element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
