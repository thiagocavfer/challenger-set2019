import React from 'react';
import ReservationsSummary from '../ReservationsSummary';

export default class Reservations extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      items: null,
    };
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    this.setState({
      items: JSON.parse(localStorage.getItem('medicamentos'))
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
          <ReservationsSummary
            items={items}
            getTotalValue={this.getTotalValue}
          />
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
