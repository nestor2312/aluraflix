import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Formumario from './pages/Form';
import GameDetails from './assets/Componentes/Game/Index';

import Games from "./db/Games.json"
import { useEffect, useState } from 'react';
import EditGame from './assets/Componentes/Edit/Index';
function App() {
  // eslint-disable-next-line no-unused-vars
  
  const [categorias, setCategorias] = useState([]);

  
  useEffect(() => {
    setCategorias(Games.categorias);
    
  }, []);
  const handleDeleteGame = (categoryId, gameId) => {
    // categorias
    const updatedCategorias = categorias.map((categoria) => {
      if (categoria.id === categoryId) {
        return {
          ...categoria,
          juegos: categoria.juegos.filter((juego) => juego.id !== gameId),
        };
      }
      return categoria;
    });

    // Actualiza categorias
    setCategorias(updatedCategorias);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home categorias={categorias}  handleDeleteGame={handleDeleteGame}/>} />
        <Route path="/form" element={<Formumario />} />
        <Route path="/game/:id" element={<GameDetails categorias={categorias} />} />
       <Route path='/edit-game/:id' element={<EditGame  categorias={categorias} setCategorias={setCategorias} />} />
      </Routes>
    </Router>
  );
}

export default App;