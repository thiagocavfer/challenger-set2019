import React from 'react';

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
      console.log(parseFloat(items[0].valor_unitario), parseInt(items[0].quantidade));
      
      return (
        <React.Fragment>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Nome do medicamento</th>
                  <th>Laboratório</th>
                  <th>Valor unitário</th>
                  <th>Valor total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, key) => (
                  <tr key={key}>
                    <td>{item.nome}</td>
                    <td>{item.laboratorio}</td>
                    <td>R$ {item.valor_unitario}</td>
                    <td>R$ {this.getTotalValue(item)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

  render() {
    return (
      <header className="container">
        <h1>Reservas</h1>
        {this.buildItems(this.state.items)}
      </header>
    );
  }
}
