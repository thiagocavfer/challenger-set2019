import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <NavLink to="/" className="navbar-brand h1 mb-0">CDTS</NavLink>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" exact activeClassName="active">
                Medicamentos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/reservas/" className="nav-link" activeClassName="active">
                Reservas
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
