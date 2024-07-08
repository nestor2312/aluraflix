/* eslint-disable react/prop-types */
import "./categoria.css";
import {normalizeClassName} from "../../../Normalize/normalize"


const Categoria = ({nombre}) => {
  const color = normalizeClassName(nombre);
  return (
    <div className={`category ${color}`}>
      <h3>{nombre}</h3>
    </div>
  );
};

export default Categoria;
