/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Banner from "../assets/Componentes/Banner/Banner";
import Contenido from "../assets/Componentes/Contenido";
import Header from "../assets/Componentes/Header/Header";
import Footer from "../assets/Componentes/Footer/Index";

const Home = ({ categorias,  handleDeleteGame}) => {
  
  return (
    <section className="Home">
      <Header />
      <Banner />
      <Contenido categorias={categorias} handleDeleteGame={handleDeleteGame} />
      <Footer />
    </section>
  );
};

export default Home;
