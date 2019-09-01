import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  render() {
    return (
      <h1>Olá, Mundo!</h1>
    );
  }
}

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
} else {
  console.error('Elemento raiz não encontrado!');
}
