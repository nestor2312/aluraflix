/* eslint-disable react/prop-types */
import Card from "../Card";
import Categoria from "../Categoria/Index";
import "./index.css";

const Contenido = ({ categorias, handleDeleteGame}) => {


  return (
    <section>
      <div className="container">
        {categorias.map((categoria) => (
          <div key={categoria.id} className="categoria">
            <Categoria nombre={categoria.nombre} />
            <div className="contenido">
              {categoria.juegos.map((juego) => (
                <Card key={juego.id} juego={juego} categoria={categoria} onDelete={() => handleDeleteGame(categoria.id, juego.id)} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contenido;
