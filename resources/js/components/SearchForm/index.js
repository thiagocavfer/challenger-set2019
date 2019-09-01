import React from 'react';

export default function SearchForm() {
  return (
    <form>
      <div className="input-group">
        <input type="text"
          className="form-control"
          placeholder="Buscar pelo do nome do medicamento, princípio ativo ou nome do laboratório"
          aria-label="Buscar pelo do nome do medicamento, princípio ativo ou nome do laboratório"
          aria-describedby="search-button"
        />
        <div className="input-group-append">
          <button type="button" className="btn btn-primary" id="search-button">
            &#x1F50D;
            <span className="sr-only">Buscar</span>
          </button>
        </div>
      </div>
    </form>
  );
}
