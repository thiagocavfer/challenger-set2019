import React from 'react';

export default function Medicine(props) {
  return (
    <div className="card">
      { props.image && 
        <img
          src={`/storage/${props.image}`}
          alt=""
          className="img-fluid"
        />
      }
      <div className="card-body">
        <h2 className="h3 card-title">
          {props.heading}
          <br/>
          <small className="text-muted">{props.subheading}</small>
        </h2>
        <p>{props.text}</p>
        <span>R$ {props.price}</span>
      </div>
      <div className="card-footer">
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            placeholder="Quantidade"
            aria-label="Quantidade"
            aria-describedby="add-button"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              id="add-button"
            >
              +
              <span className="sr-only">Reservar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
