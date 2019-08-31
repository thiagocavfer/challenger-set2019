import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../formatter'
import style from './style'
import CartComponent from './CartComponent'


class HomeComponent extends Component {

    constructor() {
        super()

        this.state = {
            produtos: [],
            carrinho: {}
        }
    }


   async componentDidMount() {

      await axios.get(`/api/carrinhos?user_id=${user.id}`)
            .then((res) => {
                let produtos = res.data.data.produtos
                let carrinho = res.data.data.carrinho
                this.setState({ produtos })
                this.setState({ carrinho })
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        const produtos = this.state.produtos
        const carrinho = this.state.carrinho
        return (
            <div>

                <CartComponent produtos={produtos} carrinho={carrinho} />

            </div>
        )
    }
}

export default HomeComponent
