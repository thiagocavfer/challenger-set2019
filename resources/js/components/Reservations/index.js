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
    this.handleUndo = this.handleUndo.bind(this);
    this.handleConclude = this.handleConclude.bind(this);
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

  handleUndo(ggrem) {
    const storageValues = JSON.parse(localStorage.getItem('medicamentos'));
    for (let i = 0; i < storageValues.length; i++) {
      if (ggrem === storageValues[i].ggrem) {
        storageValues.splice(i, 1);
        break;
      }
    }

    if (storageValues.length) {
      localStorage.setItem('medicamentos', JSON.stringify(storageValues));
    } else {
      localStorage.removeItem('medicamentos');
    }
    
    this.getItems();
    
    alert('Reserva desfeita com sucesso!');
  }

  handleConclude() {
    localStorage.clear();
    this.getItems();
    
    alert('Pedido concluido com sucesso!');
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, key) => (
                  <Reservation
                    key={key}
                    ggrem={item.ggrem}
                    name={item.nome}
                    laboratory={item.laboratorio}
                    unitValue={item.valor_unitario}
                    quantity={item.quantidade}
                    undo={this.handleUndo}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <hr />
          <ReservationsSummary
            items={items}
            conclude={this.handleConclude}
          />
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
