import backgroundImg from '../../../assets/images/god-of-war-wallpaper.png';
import coverImg from '../../../assets/images/god-of-war.jpg';
import "./index.css"
const styles = {
  container: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    textAlign: 'center',
    color: 'white',
    textShadow: ' 2px 2px 4px rgba(0, 0, 0, 0.7)',
  },
 
  coverImage: {
    position: 'absolute',
    right: '110px' ,
    width: '500px',
    borderRadius: '5%', 
    border: '5px solid #FFD700',
    boxShadow: ' 0 0 25px #FFD700', 
  },
};

function Banner() {
  return (
    <div style={styles.container} className='ocultar'>
      <img src={coverImg}  className='image' alt="Tomado de https://wallpapercave.com/w/wp1858400 y https://wall.alphacoders.com/big.php?i=2898" style={styles.coverImage} />
      <h1>Aventura</h1>
      <p>Libera el poder de los dioses y embárcate en una búsqueda despiadada como Kratos, un ex guerrero espartano impulsado a destruir a Ares, el dios de la guerra. Armado con letales espadas de cadena dobles, Kratos debe atravesar las criaturas más oscuras de la mitología, incluidas Medusa, Cyclops, Hydra y más, mientras resuelve intrincados acertijos en entornos impresionantes. Impulsado por pura venganza, nada puede impedir que Kratos consiga la absolución.</p>
    </div>
  );
}

export default Banner;