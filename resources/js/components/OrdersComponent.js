import React, { Component } from 'react'
import { formatCurrency } from '../formatter'
import style from './style'



class OrdersComponent extends Component {



    constructor() {
        super()
        this.state = {
            pedidos:[]
        }
        this.listOrders = this.listOrders.bind(this)
    }




   listOrders(url){
        axios.get(url).then(res => {
          this.setState({ pedidos: res.data })})
            .catch(err => { console.log(err) })
   }



    componentDidMount() {
        this.listOrders(`/api/pedidos?user_id=${user.id}`)
    }





    render() {
        const pedidos = this.state.pedidos

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>

                        <div className='card'>
                            <div className='card-header'><i className="fa fa-pdf"></i> Pedidos </div>
                            <div className='card-body'>

                                <div>
                                    <ul className="list-group" >
                                    {pedidos.map(pedido => (
                                           <li className="list-group-item" key={pedido.id}>
                                               <h4>Pedido nº: {pedido.id}</h4>
                                               <ul className='list-group'>
                                                <div className="row">
                                                  {pedido.produtos.map((p, index) => (
                                                      <div key={index} className="col-md-4">
                                                        <li className='list-group-item'>Item: {index+1} </li>
                                                        <li className='list-group-item'><img style={style.image.orderDetails} src={`/images/${p.avatar}`} /></li>
                                                        <li className='list-group-item'> {p.nome} </li>
                                                        <li className='list-group-item'> nome: {p.nome} </li>
                                                        <li className='list-group-item'> {p.apresentacao} </li>
                                                        <li className='list-group-item'> {formatCurrency(p.valor_unitario)} </li>
                                                        <li className='list-group-item'> unidades: {p.pivot.quantidade} </li>
                                                     </div>
                                                  ))}
                                                </div>
                                               </ul>
                                           </li>
                                        ))}
                                      </ul>
                                </div>

                                   <div className='row'>
                                       <div className='col-md-6 offset-md-3 text-center'>{pedidos.length > 0?
                                             <button onClick={()=>{}} className='btn btn-outline-primary btn-block' >
                                                PDF
                                             </button>
                                        : ''}

                                       </div>
                                   </div>

                            </div>
                        </div>

                    </div>
                </div>
          </div>
        )
    }
}

export default OrdersComponent
