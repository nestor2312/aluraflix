import { Link } from "react-router-dom";
import "./Index.css"
const Header = () => {
  return (
    <>
      <div className="header">
        <div>
            <img src="./img/Logo.png" alt=""/>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/"  className={location.pathname === '/' ? 'active' : ''}>Home</Link>
              </li>
              <li>
                <Link to="/form" className={location.pathname === '/form' ? 'active' : ''}>Agregar</Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;
