
import React, { Component } from 'react'
import { formatCurrency } from '../formatter'
import style from './style'
import Product from './Product'

class Products extends Component {

    render() {
        return (
            <div className='row'>
                {this.props.produtos.map(el => (
                    <Product key={el.id} produto={el} />
                ))}
            </div>
        )
    }
}

export default Products
