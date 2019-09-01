import React from 'react';

export default class SearchForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.emitChangeDebounced = _.debounce(this.emitChange, 250);
  }

  componentWillUnmount() {
    this.emitChangeDebounced.cancel();
  }

  emitChange(value) {
    this.props.onSearchTermChange(value);
  }

  handleChange(event) {
    this.emitChangeDebounced(event.target.value);
  }

  handleSubmit() {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input type="search"
            className="form-control"
            placeholder="Buscar pelo nome do medicamento, princípio ativo ou nome do laboratório"
            aria-label="Buscar pelo nome do medicamento, princípio ativo ou nome do laboratório"
            defaultValue={this.props.searchTerm}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}
