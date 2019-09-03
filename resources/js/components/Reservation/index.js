import React from 'react';
import axios from 'axios';

export default class Reservations extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      totalValue: 'Calculando...'
    };
  }

  componentDidMount() {
    this.getTotalValue(this.props.unitValue, this.props.quantity);
  }

  getTotalValue(unitValue, quantity) {
    axios
      .post('/api/calcular-valor-total', {
        'valor_unitario': unitValue,
        'quantidade': quantity
      })
      .then(response => {
        this.setState({ totalValue: `R$ ${response.data.toFixed(2)}` });
      })
      .catch(function (error) {
        this.setState({ totalValue: 'Erro ao calcular valor total' });
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.quantity}x {this.props.name}</td>
        <td>{this.props.laboratory}</td>
        <td>R$ {this.props.unitValue}</td>
        <td>{this.state.totalValue}</td>
      </tr>
    );
  }
}
