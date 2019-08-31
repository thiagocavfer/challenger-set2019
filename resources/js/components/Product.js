
import React, { Component } from 'react'
import { formatCurrency } from '../formatter'
import style from './style'



class Product extends Component {

    constructor() {
        super()
        this.state = {
            produtosQt: 1,

        }
        this.addToCart = this.addToCart.bind(this)
    }




    addToCart(){
        let request = this.props.produto
        request.user_id = user.id
        request.unid = this.state.produtosQt
        axios.post('/api/carrinhos', request)
          .then(res => {
              let result= res.data.data
               alert(result.message)

           }).catch(err =>{
             console.log(err)
          })
    }






    render() {
        const produtosQt = this.state.produtosQt
        const counter = (size) => {
            let options = []
            for (let i = 1; i < (size + 1); i++) {
                options.push(<option key={i}>{i}</option>)
            }
            return options
        }

        return (
            <div  className='col-md-3'  style={style.cardBox}>
                <div className='card'>
                    <div className='card-header'>{this.props.produto.nome}</div>
                    <div className='card-body'>
                        <img style={style.image} src={`/images/${this.props.produto.avatar}`} />
                        <p style={style.paragraph}>apresentação: {this.props.produto.apresentacao}</p>
                        <p style={style.paragraph}>laboratorio: {this.props.produto.laboratorio}</p>
                        <p style={style.paragraph}>principio ativo: {this.props.produto.principio_ativo}</p>
                        <p style={style.paragraph}>estoque inicial: {this.props.produto.estoque_inicial}</p>
                        <p>valor unitário: {formatCurrency(this.props.produto.valor_unitario)}</p>
                    </div>
                    <div className="card-footer">
                        <div className="row" style={{padding: 10}}>

                            <div className="col-md-10 offset-md-1">{(this.state.produtosQt > 0) ? `unid.: ${produtosQt}` : ""} </div>
                            <div className="col-md-10 offset-md-1">{(this.state.produtosQt > 0) ? `valor: ${formatCurrency(produtosQt * this.props.produto.valor_unitario)}` : ""}</div>

                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <select onChange={(e) => this.setState({ produtosQt: e.target.value })} className="form-control form-control-sm">
                                    {counter(this.props.produto.estoque_inicial)}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <button onClick={this.addToCart} className="btn btn-outline-primary btn-sm">adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Product
