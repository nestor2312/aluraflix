/* eslint-disable react/prop-types */
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Formu from '../Formulario/Index';
import Footer from '../Footer/Index';

const EditGame = ({ categorias, setCategorias }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  
  useEffect(() => {
    const foundGame = categorias
      .flatMap(categoria => categoria.juegos)
      .find(juego => juego.id === id);
    setGame(foundGame);
  }, [id, categorias]);

  const handleSave = (updatedGame) => {
    const updatedCategorias = categorias.map(categoria => {
      if (categoria.juegos.find(juego => juego.id === id)) {
        return {
          ...categoria,
          juegos: categoria.juegos.map(juego =>
            juego.id === id ? updatedGame : juego
          ),
        };
      }
      return categoria;
    });
    setCategorias(updatedCategorias);
    localStorage.setItem('categorias', JSON.stringify(updatedCategorias));
    navigate(`/game/${id}`);
  };

  return (
    <div>
      <h2>Editar Juego</h2>
      {game ? (
        <Formu categorias={categorias} gameToEdit={game} onSave={handleSave} />
      ) : (
        <p>Juego no encontrado</p>
      )}
  <Footer />
    </div>
  );
};

export default EditGame;
