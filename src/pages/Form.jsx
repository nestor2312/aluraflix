import Footer from "../assets/Componentes/Footer/Index";
import Formu from "../assets/Componentes/Formulario/Index";
import Header from "../assets/Componentes/Header/Header";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Games from "../db/Games.json";
// import Lista from "../assets/Componentes/Lista/Index"; // Asegúrate de que Lista esté correctamente importado

const Formumario = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    setCategorias(Games.categorias);
  }, []);

  return (
    <>
      <Header />
      <section>
        <Formu categorias={categorias} />
        {/* <Lista items={items} deleteItem={deleteItem} editItem={editItem} /> */}
      </section>
      <Footer />
    </>
  );
};

export default Formumario;
