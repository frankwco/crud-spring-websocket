import React, { createContext, useContext, useState } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';
import Rodape from './components/rodape/Rodape';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProdutoLista from './pages/produto/lista/ProdutoLista';
import ProdutoFormulario from './pages/produto/formulario/ProdutoFormulario';

export const TemaContexto = React.createContext();

function App() {

  const [temaDark, setTemaDark] = useState(true);

  return (
    <div className="App">

      <TemaContexto.Provider value={{ temaDark, setTemaDark }}>
        

        <BrowserRouter>
        <Menu />
          <Routes>
            <Route exact path='/' Component={() => <Home />} />
            <Route path='/produto' Component={() => <ProdutoLista />} />
            <Route path='/produto-formulario/*' Component={() => <ProdutoFormulario />} />
          </Routes>
        </BrowserRouter>
        <Rodape />
      </TemaContexto.Provider>
    </div>
  );
}

export default App;
