import { Outlet, Link } from "react-router-dom";
import '../index.css';

const Layout = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
        <p>- mae tem café?</p>
        <p>- tem não</p>
        <p>- O vazio dentro de mim é como uma xícara de café, esquecida no canto de uma mesa. o aroma que um dia foi reconfortante, agora se dispersa no ar, deixando apenas o amargor de uma bebida que que esfriou com o tempo. Cada gole me lembra da ausência de calor, da solidão que invade o corpo e a alma.</p>
      </main>

      <footer>
        <p>&copy; 2024 FDS</p>
      </footer>
    </div>
  );
};

export default Layout;
