import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand text-white" id="navbar" href="#navbar">
                    Store
                </a>
                <button
                    className="navbar-toggler bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="ms-2 text-decoration-none text-white">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Products" className="ms-2 text-decoration-none text-white">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="ms-2 text-decoration-none text-white">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
