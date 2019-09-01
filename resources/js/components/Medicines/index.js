import React from 'react';
import axios from 'axios';

import SearchForm from '../SearchForm';
import Medicine from '../Medicine';

export default class Medicines extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      items: null
    };
    this.buildItems = this.buildItems.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/medicamentos').then(response => {
        this.setState({
          items: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
        <SearchForm />

        {this.buildItems(this.state.items)}
      </div>
    );
    
  }
}
