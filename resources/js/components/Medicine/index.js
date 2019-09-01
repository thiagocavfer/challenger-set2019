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
        <h3 className="card-title">
          {props.heading}
          <br/>
          <small className="text-muted">{props.subheading}</small>
        </h3>
        <p className="card-text">
          {props.text}
        </p>
      </div>
      <div className="card-footer"></div>
    </div>
  );
}
