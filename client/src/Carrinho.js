import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeFromCart } from './actions/CartActions'

class Carrinho extends Component{

    renderList() {
        return this.props.cart.itens.map((item, index) => {
            return (
                <tr key={index.toString()}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.laboratorio}</td>
                    <td>{item.valor_unitario}</td>
                    <td>{item.quantidade}</td>
                    <td><button onClick={()=>this.props.removeFromCart(item.id)}>Remover</button></td>

                </tr>
            )
        })
    }
    render(){
        return (
          <div className="App">
              <nav className="navbar navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand">Shopping</Link>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Busca</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/cart" className="nav-link">Carrinho</Link>
                        </li>
                    </ul>
              </nav>
              <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nome</th>
                            <th>Laboratorio</th>
                            <th>Valor</th>
                            <th>Quant</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderList() }
                    </tbody>
                </table>
              </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, { removeFromCart }) (Carrinho);