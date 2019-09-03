import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';
import { removeFromCart, clearCart } from './actions/CartActions'
import './css/carrinho.css'
import { formatMoeda } from './utils';
import Alert from './components/Alert';

class Carrinho extends Component{

    constructor(props) {
        super(props)
        this.state = {
            modalIsVisible: false,
            modalMsg: ''
        }
    }

    renderList() {
        return this.props.cart.itens.map((item, index) => {
            return (
                <tr key={index.toString()}>
                    <td>{item.nome}</td>
                    <td>{item.laboratorio}</td>
                    <td className="text-right">{formatMoeda(item.valor_unitario)}</td>
                    <td className="text-right">{item.quantidade}</td>
                    <td className="text-right">{this.getSubtotal(item)}</td>
                    <td className="text-center"><button className="btn btn-sm btn-danger" onClick={()=>this.removerDoCarrinho(item.id)}>Remover</button></td>
                </tr>
            )
        })
    }

    renderCart() {
        return (
            <div>
            <table className="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th scope="row">Nome</th>
                        <th scope="row">Laboratorio</th>
                        <th scope="row" className="text-right">Valor Unitário</th>
                        <th scope="row" className="text-right">Quantidade</th>
                        <th scope="row" className="text-right">Subtotal</th>
                        <th scope="row"></th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderList() }
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row" colSpan="3">Total</th>
                        <th scope="row" className="text-right">{this.props.cart.itens.length}</th>
                        <th scope="row" className="text-right">{formatMoeda(this.props.cart.total)}</th>
                        <th scope="row"></th>
                    </tr>
                </tfoot>
            </table>
            <div>
                <div className="form-row text-right">
                    <div className="form-group col-md-12">
                        <button className="btn btn-danger"
                            onClick={() => this.limparCarrinho()}>
                            Limpar Carrinho
                        </button>
                        <button className="btn btn-primary"
                            onClick={() => this.salvarPedido()}>
                            Confirmar Pedido
                        </button>
                    </div>
                </div>
            </div>
            </div>
        )
    }

    removerDoCarrinho(id) {
        this.setState({
            modalMsg: 'O item foi removido do Carrinho',
            modalIsVisible: true
        })
        this.props.removeFromCart(id)
    }

    limparCarrinho() {
        this.setState({
            modalMsg: 'Todos os itens foram removidos do Carrinho',
            modalIsVisible: true
        })
        this.props.clearCart()
    }


    renderEmptyCart() {
        return (
            <p>Não há itens para exibir.</p>
        )
    }

    getSubtotal(item) {
        return formatMoeda(item.quantidade * item.valor_unitario)
    }

    getPostData() {
        return this.props.cart.itens.map((item) => {
            return {
                medicamento_id: item.id,
                quantidade: item.quantidade,
            }
        })
    }

    salvarPedido() {
        var url = `http://localhost/api/pedidos`;
        console.log(this.getPostData());
        axios.post(url, {
            itens: this.getPostData()
        })
        .then(function (response) {
            this.props.clearCart()
        })
        .catch(function (error) {
            console.log(error);
        });
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
                <Alert visible={this.state.modalIsVisible} text={this.state.modalMsg} />
                <div className="container">
                    <h4>Carrinho</h4>
                        { this.props.cart.itens.length ? this.renderCart() : this.renderEmptyCart() }
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

export default connect(mapStateToProps, { removeFromCart, clearCart }) (Carrinho);