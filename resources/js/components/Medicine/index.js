import React from 'react';

export default class FilterForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      quantity: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange(event) {
    if (event.target.value && event.target.value > 0) {
      this.setState({
        disabled: false,
        quantity: event.target.value
      });
    } else {
      this.resetState();
    }
  }

  handleClick(event) {
    const medicine = {
      nome: this.props.heading,
      laboratorio: this.props.subheading,
      valor_unitario: this.props.price,
      quantidade: this.state.quantity
    };

    const oldStorageValue = JSON.parse(localStorage.getItem('medicamentos'));
    const value = oldStorageValue
      ? oldStorageValue.concat(medicine)
      : [medicine];

    localStorage.setItem('medicamentos', JSON.stringify(value));

    alert('Medicamento reservado com sucesso!');
    
    this.resetState();
  }

  handleSubmit() {
    event.preventDefault();
  }

  resetState() {
    this.setState({
      disabled: true,
      quantity: ''
    });
  }

  render() {
    return (
      <div className="card">
        { this.props.image && 
          <img
            src={`/storage/${this.props.image}`}
            alt=""
            className="img-fluid"
          />
        }
        <div className="card-body">
          <h2 className="h3 card-title">
            {this.props.heading}
            <br/>
            <small className="text-muted">{this.props.subheading}</small>
          </h2>
          <p>{this.props.text}</p>
          <span>R$ {this.props.price}</span>
        </div>
        <div className="card-footer">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input
                type="number"
                min="1"
                className="form-control"
                placeholder="Qtde."
                aria-label="Quantidade"
                aria-describedby="add-button"
                value={this.state.quantity}
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button
                  className='btn btn-primary'
                  type="button"
                  id="add-button"
                  onClick={this.handleClick}
                  disabled={this.state.disabled}
                >
                  Reservar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
