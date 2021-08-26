import './styles.css';
import 'bootstrap/js/src/collapse.js';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md main-nav">
            <div className="container-fluid">
                <Link to="/" className="nav-logo-text">
                    <p>Carros Top</p>
                </Link>

                <button
                    className="navbar-toggler custom-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dslayout-navbar"
                    aria-controls="dslayout-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon custom-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="dslayout-navbar">
                    <ul className="navbar-nav offset-md-2 main-menu">
                        <li>
                            <NavLink to="/" activeClassName="active" exact >HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" activeClassName="active">CATÁLOGO</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;