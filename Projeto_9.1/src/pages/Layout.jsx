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
      </main>

      <footer>
        <p>&copy; 2024 FDS</p>
      </footer>
    </div>
  );
};

export default Layout;
