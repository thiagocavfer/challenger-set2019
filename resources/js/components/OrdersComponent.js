import React, { Component } from 'react'
import { formatCurrency } from '../formatter'
import style from './style'
import Axios from 'axios';



class OrdersComponent extends Component {

    constructor() {
        super()
        this.printPDF = this.printPDF.bind(this)
    }


    printPDF(pedido_id){
        axios.get(`/api/pedidos/print-pdf/${pedido_id}`,{
            responseType: 'blob'
        }).then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'pedido.pdf'); //or any other extension
            document.body.appendChild(link);
            link.click();
        });
    }




    render() {
        const pedidos = this.props.pedidos

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>

                        <div className='card'>
                            <div className='card-header'><i className="fa fa-pdf"></i> Pedidos </div>
                            <div className='card-body'>

                                <div>
                                    <ul className="list-group" >
                                    {pedidos.map( (pedido, index ) => (
                                           <li className="list-group-item" key={index}>
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
                                                <div className='col-md-3 offset-md-9 text-center'>
                                                       <button onClick={() => this.printPDF(pedido.id)} className='btn btn-outline-primary btn-block' >
                                                           PDF
                                                        </button>
                                                </div>

                                               </ul>
                                           </li>
                                        ))}
                                      </ul>
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
