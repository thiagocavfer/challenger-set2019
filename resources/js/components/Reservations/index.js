import React from 'react';
import axios from 'axios';

export default class Reservations extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      items: null,
    };
    this.getItems = this.getItems.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    this.setState({
      items: JSON.parse(localStorage.getItem('medicamentos'))
    });
  }

  handleClick() {
    axios
    ({
      method: 'post',
      url: '/api/reservar',
      responseType: 'blob',
      data: {
        medicamentos: this.state.items
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

  buildItems(items) {
    if (items) {
      return (
        <React.Fragment>
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Medicamento(s)</th>
                  <th scope="col">Laboratório</th>
                  <th scope="col">Valor unitário</th>
                  <th scope="col">Valor total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, key) => (
                  <tr key={key}>
                    <td>{item.quantidade}x {item.nome}</td>
                    <td>{item.laboratorio}</td>
                    <td>R$ {item.valor_unitario}</td>
                    <td>R$ {this.getTotalValue(item)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr />
          <div className="d-flex flex-row">
            <div className="flex-grow-1">
              <p className="h5">
                Quantidade total:&nbsp;
                <span className="text-primary">
                  {this.getTotalQuantity(items)} medicamento(s)
                </span>
              </p>
              <p className="h5">
                Total geral do pedido:&nbsp;
                <span className="text-primary">
                  R$ {this.getFullValue(items)}
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
        </React.Fragment>
      );
    }

    return (
      <p className="lead">Você ainda não reservou nenhum medicamento.</p>
    );
  }

  getTotalValue(item) {
    return (parseFloat(item.valor_unitario) * parseInt(item.quantidade))
      .toFixed(2);
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
      values[key] = this.getTotalValue(item)
    ));

    return values.reduce(function (accumulator, currentValue) {
      return (parseFloat(accumulator) + parseFloat(currentValue)).toFixed(2);
    });
  }

  render() {
    return (
      <main>
        <div className="bg-light pt-3 pb-3 mb-4">
          <div className="container">
            <div className="d-sm-flex">
              <h1 className="flex-grow-1">Reservas</h1>
            </div>
          </div>
        </div>
        <div className="container">
          {this.buildItems(this.state.items)}
        </div>
      </main>
    );
  }
}
