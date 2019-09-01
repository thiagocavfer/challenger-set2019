import React from 'react';
import ReactDOM from 'react-dom';
import Medicines from './Medicines';

export default class App extends React.Component {
  render() {
    return (
      <Medicines />
    );
  }
}

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
} else {
  console.error('Elemento raiz não encontrado!');
}
