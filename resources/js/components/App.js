import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Medicines from './Medicines';
import Reservations from './Reservations';
import Footer from './Footer';

export default class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Medicines} />
          <Route path="/reservas/" component={Reservations} />
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
} else {
  console.error('Elemento raiz não encontrado!');
}
