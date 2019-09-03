import React from 'react';
import axios from 'axios';

export default class Reservations extends React.PureComponent {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios
    ({
      method: 'post',
      url: '/api/reservar',
      responseType: 'blob',
      data: {
        medicamentos: JSON.parse(localStorage.getItem('medicamentos'))
      }
    })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `pedido-de-reservas-${new Date().getTime()}.pdf`);
        link.dispatchEvent(new MouseEvent('click'));
        window.URL.revokeObjectURL(url);
        // localStorage.clear();
        // this.getItems();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getTotalQuantity(items) {
    let quantities = [];
    items.forEach((item, key) => (
      quantities[key] = item.quantidade
    ));

    return quantities.reduce(function (accumulator, currentValue) {
      return parseInt(accumulator) + parseInt(currentValue);
    });
  }

  getFullValue(items) {
    let values = [];
    items.forEach((item, key) => (
      values[key] = this.props.getTotalValue(item)
    ));

    return values.reduce(function (accumulator, currentValue) {
      return (parseFloat(accumulator) + parseFloat(currentValue)).toFixed(2);
    });
  }

  render() {
    return (
      <div className="d-flex flex-row">
        <div className="flex-grow-1">
          <p className="h5">
            Quantidade total:&nbsp;
            <span className="text-primary">
              {this.getTotalQuantity(this.props.items)} medicamento(s)
            </span>
          </p>
          <p className="h5">
            Total geral do pedido:&nbsp;
            <span className="text-primary">
              R$ {this.getFullValue(this.props.items)}
            </span>
          </p>
        </div>
        <div className="justify-content-end">
          <button
            className="btn btn-lg btn-primary"
            onClick={this.handleClick}
          >
            Concluir Pedido
          </button>
        </div>
      </div>
    );
  }
}
