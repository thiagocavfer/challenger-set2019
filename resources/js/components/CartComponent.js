import React, { Component } from 'react'
import { formatCurrency } from '../formatter'
import style from './style'
import { request } from 'https';
import CartProductComponent from './CartProductComponent'


class CartComponent extends Component {


    constructor() {
        super()
        this.state = {
            produtos:[]
        }
        this.concluir = this.concluir.bind(this)

    }




   concluir(){
       axios.post('/api/pedidos', { user_id: user.id }, { responseType: 'blob' })
          .then(res => {
              const url = window.URL.createObjectURL(new Blob([res.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'pedido.pdf'); 
              document.body.appendChild(link);
              link.click();
          })
        .catch(err => {
              console.log(err)
        })
        this.props.action()
   }





    render() {
        const produtos = this.props.produtos
        const carrinho = this.props.carrinho
        const action = this.props.action
        let valorTotal = 0;
        let quantidade = 0;

        produtos.forEach(p => {
            quantidade += p.pivot.quantidade;
            valorTotal += p.pivot.quantidade * p.valor_unitario;
        })

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>

                        <div className='card'>
                            <div className='card-header'><i className="fa fa-shopping-cart"></i> CARRINHO </div>
                            <div className='card-body'>

                                <div>
                                    <ul className="list-group" >
                                    {produtos.map(produto => (
                                           <li className="list-group-item" key={produto.id}>
                                               <CartProductComponent  action={action}  produto={produto} carrinho={carrinho} />
                                           </li>
                                        ))}
                                      </ul>
                                </div>

                                { quantidade > 0?
                                    <div>
                                        <p><strong>Quantidade:</strong> {quantidade} Itens</p>
                                        <p><strong>Total:</strong> {formatCurrency(valorTotal)}</p>
                                    </div> : ""}

                                   <div className='row'>
                                       <div className='col-md-6 offset-md-3 text-center'>{quantidade > 0?
                                             <button onClick={this.concluir} className='btn btn-outline-primary btn-block' >
                                               Concluir Pedido
                                             </button>
                                        : <p> CARRRINHO VAZIO </p>}

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

export default CartComponent
