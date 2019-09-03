import React from 'react';
import axios from 'axios';
import Reservation from '../Reservation';
import ReservationsSummary from '../ReservationsSummary';

export default class Reservations extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      items: null,
      totalValue: 'Calculando...'
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

  getTotalValue(item) {
    axios
      .post('/api/calcular-valor-total', {
        'valor_unitario': item.valor_unitario,
        'quantidade': item.quantidade
      })
      .then(response => {
        this.setState({ totalValue: `R$ ${response.data.toFixed(2)}` });
      })
      .catch(function (error) {
        this.setState({ totalValue: 'Erro ao calcular valor total' });
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
                  <Reservation
                    key={key}
                    name={item.nome}
                    laboratory={item.laboratorio}
                    unitValue={item.valor_unitario}
                    quantity={item.quantidade}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <hr />
          <ReservationsSummary items={items} />
        </React.Fragment>
      );
    }

    return (
      <p className="lead">Você ainda não reservou nenhum medicamento.</p>
    );
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
