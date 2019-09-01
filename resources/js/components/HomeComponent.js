import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../formatter'
import style from './style'
import CartComponent from './CartComponent'
import OrdersComponent from './OrdersComponent'


class HomeComponent extends Component {

    constructor() {
        super()

        this.state = {
            produtos: [],
            carrinho: {}
        }
        this.refresh = this.refresh.bind(this)
    }


    componentDidMount() {
        this.loadData(`/api/carrinhos?user_id=${user.id}`)
    }


    refresh(){
        this.loadData(`/api/carrinhos?user_id=${user.id}`)
    }

    
    loadData(url){
        axios.get(url)
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
        const action = this.refresh
        return (
            <div className='container-fluid'>
                <div className='row'>
                   <CartComponent  action={action} produtos={produtos} carrinho={carrinho} />
                </div>
                <br /><hr /><br />
                <div className='row'>
                  <OrdersComponent />
                </div>
            </div>
        )
    }
}

export default HomeComponent
