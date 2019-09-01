import React from 'react';
import axios from 'axios';

import FilterForm from '../FilterForm';
import Medicine from '../Medicine';

export default class Medicines extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      items: null,
      searchTerm: '',
      orderByTerm: '',
      directionTerm: 'asc'
    };
    this.getItems = this.getItems.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOrderBy = this.handleOrderBy.bind(this);
    this.handleDirection = this.handleDirection.bind(this);
    this.buildItems = this.buildItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.state.searchTerm !== prevState.searchTerm)
      || (this.state.orderByTerm !== prevState.orderByTerm)
      || (this.state.directionTerm !== prevState.directionTerm)
    ) {
      this.getItems();
    }
  }

  getItems() {
    axios
      .get(this.getUrl())
      .then(response => {
        this.setState({
          items: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getUrl() {
    let url = '/api/medicamentos';

    if (this.state.searchTerm || this.state.orderByTerm) {
      const searchParams = new URLSearchParams();

      if (this.state.searchTerm) {
        searchParams.append('filtro', this.state.searchTerm);
      }

      if (this.state.orderByTerm) {
        searchParams.append('ordenar_por', this.state.orderByTerm);

        if (this.state.directionTerm) {
          searchParams.append('direção', this.state.directionTerm);
        }
      }

      url = `${url}?${searchParams.toString()}`;
    }

    return url;
  }

  handleSearch(searchTerm) {
    this.setState({ searchTerm: searchTerm });
  }

  handleOrderBy(orderByTerm) {
    this.setState({ orderByTerm: orderByTerm });
  }

  handleDirection(directionTerm) {
    this.setState({ directionTerm: directionTerm });
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
                price={item.valor_unitario}
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
        <FilterForm
          searchTerm={this.state.searchTerm}
          onSearchTermChange={this.handleSearch}
          onOrderByChange={this.handleOrderBy}
          onDirectionChange={this.handleDirection}
        />

        {this.buildItems(this.state.items)}
      </div>
    );
  }
}
