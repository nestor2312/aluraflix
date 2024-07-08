/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Index.css";
import { normalizeClassName } from "../../../Normalize/normalize";

const Card = ({ juego, categoria, onDelete  }) => {
  const color = normalizeClassName(categoria.nombre);
 
  return (
    <section className={`cards categoria ${color}`}>
      <Link className="linkGame" to={`/game/${juego.id}`}>
        <img className="caratula" src={juego.img} alt={`tomado de ${juego.img}`} />
      </Link>
      <div className="buttons">
        <button className="boton">
          <Link className="boton" to={`/edit-game/${juego.id}`}>Editar</Link>
        </button>
        <button className="boton" onClick={onDelete}>Eliminar</button>
      </div>
    </section>
  );
};

export default Card;
