import React from 'react';
import axios from 'axios';

export default class Reservations extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      totalQuantity: 'Calculando...',
      fullValue: 'Calculando...'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getTotalQuantity(this.props.items);
    this.getFullValue(this.props.items);
  }

  getTotalQuantity(items) {
    let quantities = [];
    items.forEach((item, i) => (
      quantities[i] = item.quantidade
    ));

    axios
      .post('/api/calcular-quantidade-total', {
        quantidades: quantities
      })
      .then(response => {
        this.setState({ totalQuantity: `${response.data} medicamento(s)` });
      })
      .catch(function (error) {
        this.setState({ totalQuantity: 'Erro ao calcular quantidade total' });
        console.log(error);
      });
  }

  getFullValue(items) {
    let unitValues = [];
    let quantities = [];
    items.forEach((item, i) => {
      unitValues[i] = item.valor_unitario;
      quantities[i] = item.quantidade;
    });

    axios
      .post('/api/calcular-total-geral', {
        'valores_unitarios': unitValues,
        'quantidades': quantities
      })
      .then(response => {
        this.setState({ fullValue: `R$ ${response.data.toFixed(2)}` });
      })
      .catch(function (error) {
        this.setState({ fullValue: 'Erro ao calcular total geral' });
        console.log(error);
      });
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

  render() {
    return (
      <div className="d-flex flex-row">
        <div className="flex-grow-1">
          <p className="h5">
            Quantidade total:&nbsp;
            <span className="text-primary">{this.state.totalQuantity}</span>
          </p>
          <p className="h5">
            Total geral do pedido:&nbsp;
            <span className="text-primary">{this.state.fullValue}</span>
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
