import React, { Component } from 'react'
import { formatCurrency } from '../formatter'
import style from './style'
import { request } from 'https';


class CartComponent extends Component {


    constructor() {
        super()
        this.removeProduct = this.removeProduct.bind(this)
    }




    async removeProduct(carrinho_id, product_id) {

        await axios.delete(`/api/carrinhos/${carrinho_id}?produto_id=${product_id}`)
            .then(res => {
            }).catch((err) => { console.log(err) })

         this.props.action();
    }



    render() {
        const produto = this.props.produto
        const carrinho = this.props.carrinho


        return (<div className='row'>
                    <div className='col-md-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img style={style.cart.image} src={`/images/${produto.avatar}`} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <p>Nome: {produto.nome}</p>
                                <p>Laboratório: {produto.laboratorio}</p>
                                <p>valor unitario {formatCurrency(produto.valor_unitario)} | quant.: {produto.pivot.quantidade}</p>
                                <p>valor: {formatCurrency(produto.pivot.quantidade * produto.valor_unitario)}</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <button onClick={ () => this.removeProduct(carrinho.id, produto.id) }
                         className='btn btn-outline-primary'>
                            Remover
                        </button>
                    </div>
                </div>)
    }
}

export default CartComponent
