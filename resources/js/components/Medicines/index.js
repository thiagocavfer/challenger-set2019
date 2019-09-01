import React from 'react';
import axios from 'axios';

import SearchForm from '../SearchForm';
import Medicine from '../Medicine';

export default class Medicines extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      items: null,
      searchTerm: ''
    };
    this.getItems = this.getItems.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.buildItems = this.buildItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems(filter = null) {
    axios
      .get(this.getUrl(filter))
      .then(response => {
        this.setState({
          items: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getUrl(filter) {
    if (filter) {
      return `/api/medicamentos?filtro=${filter}`;
    }

    return '/api/medicamentos';
  }

  handleSearch(searchTerm) {
    this.getItems(searchTerm);
    this.setState({ searchTerm: searchTerm });
  }

  buildItems(items) {
    if (items) {
      return (
        <div className="row">
          {items.data.map((item, key) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={key}>
              <Medicine
                image={item.avatar}
                heading={item.nome}
                subheading={item.laboratorio}
                text={item.apresentacao}
              />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Carregando...</span>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <h2>Medicamentos</h2>
        <SearchForm
          searchTerm={this.state.searchTerm}
          onSearchTermChange={this.handleSearch}
        />

        {this.buildItems(this.state.items)}
      </div>
    );
  }
}
