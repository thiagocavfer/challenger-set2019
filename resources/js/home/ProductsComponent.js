import React, { Component } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead';
import Products from './Products'
import style from './style'


class ProductsComponent extends Component {
    constructor() {
        super()
        this.state = {
            produtos: [],
            keyWords: [],
            searchParam: '',
        }
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.search = this.search.bind(this)
        this.orderAsc = this.orderAsc.bind(this)
        this.orderDesc = this.orderDesc.bind(this)
        this.orderAscPreco = this.orderAscPreco.bind(this)
        this.orderDescPreco = this.orderDescPreco.bind(this)
        this.orderSearch = this.orderSearch.bind(this)
        this.allOrderAscPreco = this.allOrderAscPreco.bind(this)
        this.allOrderDescPreco = this.allOrderDescPreco.bind(this)
    }



    forceUpdateHandler() {
        this.setState({ searchParam: '' })
        this.listAll();
    };


    componentDidMount() {
        this.listAll();
    }


    orderAsc(){
        this.orderArray('nome', 'asc')
    }

    orderDesc(){
        this.orderArray('nome', 'desc')
    }

    orderAscPreco() {
        this.orderSearch(this.state.searchParam, 'valor_unitario')
    }

    orderDescPreco() {
        this.orderSearch(this.state.searchParam, 'valor_unitario', 'desc')
    }


    search(param) {
        this.SearchProdutos(`/api/produtos/search/${param}`)
    }

    searchOrderBy(param, orderBy, order) {
        this.SearchProdutos(`/api/produtos/search/${param}/${orderBy}/${order}`)
    }

    listAll() {
       this.GetProdutos('/api/front-page')
    }

    allOrderAscPreco(){
        this.listAllOrderByValor('asc');
    }

    allOrderDescPreco(){
        this.listAllOrderByValor('desc');
    }

    listAllOrderByValor(order) {
        this.GetProdutos(`/api/produtos/order-by/valor_unitario/${order}`)
    }

    orderArray(orderBy, order) {
        this.state.produtos = _.orderBy(this.state.produtos, [orderBy], [order]);
        this.forceUpdate()
    }

    orderSearch(param, orderBy, order = 'asc') {
        this.searchOrderBy(param, orderBy, order)
        this.forceUpdate()
    }

    listKeyWodrs(produtos) {
        let list = [];
        //carrega array com as palavras a chave para a pesquisa
        produtos.map((el, index) => {
            list.push(el.nome)
            list.push(el.laboratorio)
            list.push(el.principio_ativo)
        })
        //remove palavras duplicadas e ordena a array
        return list.filter((item, index) => list.indexOf(item) === index).sort()
    }

    GetProdutos(url) {
        frontPage.get(url).then(res => {
            //carrega os remedios a serem a exibidos nos cards
            let produtos = res.data.data
            this.setState({ produtos })
            //gera a lista de palavras sugeridas
            let keyWords = this.listKeyWodrs(produtos)
            this.setState({ keyWords })
        }).catch(err => {
            console.log(err)
        })
    }


    SearchProdutos(url) {
        axios.get(url).then(res => {
                this.setState({ produtos: res.data.data })
        }).catch(err => {
            console.log(err)
        })
    }



    render() {
        const produtos = this.state.produtos
        const keyWords = this.state.keyWords
        const searchParam = this.state.searchParam

        return (

            <div className='container py-4'>

                <div className="row" style={style.formStyle}>
                    <div className='col-md-8 offset-md-2'>

                        <div className="input-group input-group-lg">
                            <Typeahead id="typeahead" labelKey="nome" placeholder="Pesquisar por ' nome ' ' laboratório ' ou ' princípio ativo ' "
                                clearButton
                                onChange={(selected) => {
                                    this.setState({ searchParam: selected });
                                    this.search(selected)
                                } }

                                options={keyWords} />

                               <button className="btn btn-primary" onClick={this.forceUpdateHandler}><i className='fas fa-sync'></i> Recarregar</button>
                        </div>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <p style={style.searchKeyWord} className="text-center">{searchParam}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <p>Nome</p>
                        <button onClick={this.orderAsc} className="btn btn-outline-primary btn-sm"><i className="fa fa-chevron-down"></i></button>
                        <button onClick={this.orderDesc} className="btn btn-outline-primary btn-sm"><i className="fa fa-chevron-up"></i></button>
                    </div>
                    {(searchParam != '') ?
                        <div className='col-md-3'>
                            <p>Valor Unitário</p>
                            <button onClick={this.orderAscPreco} className="btn btn-outline-primary btn-sm"><i className="fa fa-chevron-down"></i></button>
                            <button onClick={this.orderDescPreco} className="btn btn-outline-primary btn-sm"><i className="fa fa-chevron-up"></i></button>
                        </div> :
                        <div className='col-md-3'>
                            <p>Valor Unitário</p>
                            <button onClick={this.allOrderAscPreco} className="btn btn-outline-primary btn-sm"><i className="fa fa-chevron-down"></i></button>
                            <button onClick={this.allOrderDescPreco} className="btn btn-outline-primary btn-sm"><i className="fa fa-chevron-up"></i></button>
                        </div>
                    }
                </div>


                <Products produtos={produtos} />

            </div>
        )
    }
}





export default ProductsComponent
