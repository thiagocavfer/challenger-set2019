import React from 'react';

export default class FilterForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.emitChangeDebounced = _.debounce(this.emitChange, 250);
    this.handleOrderByChange = this.handleOrderByChange.bind(this);
  }

  componentWillUnmount() {
    this.emitChangeDebounced.cancel();
  }

  emitChange(value) {
    this.props.onSearchTermChange(value);
  }

  handleSearchChange(event) {
    this.emitChangeDebounced(event.target.value);
  }

  handleOrderByChange(event) {
    switch (event.target.value) {
    case 'name-asc':
      this.props.onOrderByChange('nome');
      this.props.onDirectionChange('asc');
      break;
    case 'name-desc':
      this.props.onOrderByChange('nome');
      this.props.onDirectionChange('desc');
      break;
    case 'unit-value-asc':
      this.props.onOrderByChange('valor_unitario');
      this.props.onDirectionChange('asc');
      break;
    case 'unit-value-desc':
      this.props.onOrderByChange('valor_unitario');
      this.props.onDirectionChange('desc');
      break;
    default:
      this.props.onOrderByChange('');
      this.props.onDirectionChange('asc');
      break;
    }
  }

  handleSubmit() {
    event.preventDefault();
  }

  render() {
    return (
      <form className="form-inline justify-content-sm-end" onSubmit={this.handleSubmit}>
        <div className="form-group mr-lg-2 mr-sm-0 mr-3 mb-lg-0 mb-md-2 mb-sm-2">
          <label htmlFor="search-input" className="mr-sm-2">
            Buscar
          </label>
          <input
            type="search"
            className="form-control"
            id="search-input"
            placeholder="Buscar por nome, princípio ativo ou laboratório"
            defaultValue={this.props.searchTerm}
            onChange={this.handleSearchChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="order-select" className="mr-sm-2">
            Ordenar por
          </label>
          <select
            className="form-control"
            id="order-select"
            defaultValue=""
            onChange={this.handleOrderByChange}
          >
            <option value="">Selecione uma opção...</option>
            <option value="name-asc">Nome - Crescente</option>
            <option value="name-desc">Nome - Decrescente</option>
            <option value="unit-value-asc">Valor Unitário - Crescente</option>
            <option value="unit-value-desc">
              Valor Unitário - Decrescente
            </option>
          </select>
        </div>
      </form>
    );
  }
}
