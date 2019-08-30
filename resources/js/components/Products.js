
import React, { Component } from 'react'
import { formatCurrency } from '../formatter'
import style from './style'


class Products extends Component {

    render() {
        return (
                <div className='row'>
                    {this.props.produtos.map((el, i) => (
                        <div className='col-md-3' style={style.cardBox}>
                            <div className='card'>
                                <div className='card-header'> {el.nome}</div>
                                <div className='card-body'>
                                    <img style={style.image} src={`/images/${el.avatar}`} />
                                    <p style={style.paragraph}>apresentação: {el.apresentacao}</p>
                                    <p style={style.paragraph}>laboratorio: {el.laboratorio}</p>
                                    <p style={style.paragraph}>principio ativo: {el.principio_ativo}</p>
                                    <p style={style.paragraph}>estoque inicial: {el.estoque_inicial}</p>
                                    <p>valor unitário: {formatCurrency(el.valor_unitario)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        )
    }
}



export default Products
