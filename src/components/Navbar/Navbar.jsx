import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand text-white" id="navbar" href="#navbar">
                    Navbar
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
                            <a
                                className="nav-link text-white active"
                                aria-current="page"
                                href="#navbar"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#products">
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#footer">
                                Footer
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
