/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Index.css"
import Footer from "../Footer/Index";
const GameDetails = ({ categorias }) => {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);
  

  useEffect(() => {
    console.log("ID recibido:", id);
    console.log("Categorías recibidas:", categorias);

    if (categorias.length > 0) {
      const foundGame = categorias.flatMap(cat => cat.juegos).find(juego => juego.id === id);
      console.log("Juego encontrado:", foundGame);

      if (foundGame) {
        setJuego(foundGame);
      }
    }
  }, [id, categorias]);

  const extractYouTubeId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  if (!juego) {
    return <p>Juego no encontrado</p>;
  }

  const videoId = extractYouTubeId(juego.video);

  return (
    <>
      <h1>Detalles del Juego</h1>
    <div className="info">
      <div className="info1">
      <h2>{juego.nombre}</h2>
      <p>{juego.descripcion}</p>
      </div>
      <div className="info2">
      <img className="image" src={juego.img} alt={juego.nombre} />
      </div>
    </div>

      {videoId && (
        <div className="video">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            alt={`tomado de ${videoId}`}
            allowFullScreen
          ></iframe>
        </div>
       
      )}
      <Footer />
    </>
  );
};

export default GameDetails;
