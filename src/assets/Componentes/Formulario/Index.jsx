/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Index.css";

const Formu = ({ categorias, setCategorias, gameToEdit }) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (gameToEdit) {
      setInputs({
        titulo: gameToEdit.nombre,
        categoria: categorias.find(categoria => categoria.juegos.includes(gameToEdit)).nombre,
        imagen: gameToEdit.img,
        video: gameToEdit.video,
        descripcion: gameToEdit.descripcion,
      });
    }
  }, [gameToEdit, categorias]);

  const Change = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
    setErrors(errors => ({ ...errors, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!inputs.titulo) newErrors.titulo = 'El campo Titulo es obligatorio';
    if (!inputs.categoria) newErrors.categoria = 'El campo Categoria es obligatorio';
    if (!inputs.imagen) newErrors.imagen = 'El campo Imagen es obligatorio';
    if (!inputs.video) newErrors.video = 'El campo Video es obligatorio';
    if (!inputs.descripcion) newErrors.descripcion = 'El campo Descripción es obligatorio';
    return newErrors;
  };

  const Submit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      const updatedCategorias = [...categorias];
      const matchingCategory = updatedCategorias.find(category => category.nombre === inputs.categoria);
      
      if (matchingCategory) {
        const newGame = {
          id: gameToEdit ? gameToEdit.id : Date.now().toString(),
          nombre: inputs.titulo,
          descripcion: inputs.descripcion,
          img: inputs.imagen,
          video: inputs.video,
        };
        
        if (gameToEdit) {
          const oldCategory = updatedCategorias.find(category => category.juegos.includes(gameToEdit));
          if (oldCategory && oldCategory.nombre !== inputs.categoria) {
            oldCategory.juegos = oldCategory.juegos.filter(juego => juego.id !== gameToEdit.id);
            matchingCategory.juegos.push(newGame);
          
          } else {
            const index = oldCategory.juegos.findIndex(juego => juego.id === gameToEdit.id);
            oldCategory.juegos[index] = newGame;
            alert('¡Juego editado correctamente!');
          }
        }
         else {
          matchingCategory.juegos.push(newGame);
          alert('¡Juego creado correctamente!');
        }
        
        setCategorias(updatedCategorias);
        localStorage.setItem('categorias', JSON.stringify(updatedCategorias));
        setInputs({});
      } else {
        alert('Categoría no encontrada');
      }
    }
  };

  return (
    <div>
      <h2 className="titulo">{gameToEdit ? 'Editar video' : 'Nuevo video'}</h2>
      <h2 className="titulo2">
        {gameToEdit ? 'Editar la tarjeta de video' : 'Complete el formulario para crear una nueva tarjeta de video'}
      </h2>
      <div className="box">
        <hr />
        <h3>{gameToEdit ? 'Editar Tarjeta' : 'Crear Tarjeta'}</h3>
        <hr />
        <form onSubmit={Submit}>
          <div>
            <label htmlFor="titulo">Titulo</label>
            <input
              type="text"
              name="titulo"
              placeholder="Agregar titulo"
              value={inputs.titulo || ""}
              onChange={Change}
            />
            {errors.titulo && <p className="error">{errors.titulo}</p>}
          </div>
          <div>
            <label htmlFor="categoria">Categoria</label>
            <select
              name="categoria"
              value={inputs.categoria || ""}
              onChange={Change}
              className="custom-select"
            >
              <option value="">Selecciona una categoría</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.nombre}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
            {errors.categoria && <p className="error">{errors.categoria}</p>}
          </div>
          <div>
            <label htmlFor="imagen">Imagen</label>
            <input
              type="text"
              name="imagen"
              placeholder="Agregar url de imagen"
              value={inputs.imagen || ""}
              onChange={Change}
            />
            {errors.imagen && <p className="error">{errors.imagen}</p>}
          </div>
          <div>
            <label htmlFor="video">Video</label>
            <input
              type="text"
              name="video"
              placeholder="Agregar url de video"
              value={inputs.video || ""}
              onChange={Change}
            />
            {errors.video && <p className="error">{errors.video}</p>}
          </div>
          <div className="full-width">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              name="descripcion"
              value={inputs.descripcion || ""}
              onChange={Change}
              cols="30"
              rows="5"
              placeholder="Agregar descripción"
            ></textarea>
            {errors.descripcion && <p className="error">{errors.descripcion}</p>}
          </div>
          <div className="full-width">
            <button type="submit">{gameToEdit ? 'Guardar Cambios' : 'Agregar'}</button>
            <button type="button" onClick={() => setInputs({})}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formu;
