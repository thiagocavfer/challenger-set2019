import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-primary mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">CDTS</Link>
          <ul className="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" className="nav-link">Medicamentos</Link>
            </li>
            <li class="nav-item">
              <Link to="/reservas/" className="nav-link">Reservas</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
