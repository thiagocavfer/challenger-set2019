import React, { Component } from 'react'
import '../css/ResultItem.css'
import { connect } from 'react-redux'
import { addToCart } from '../actions/CartActions'
import { formatMoeda } from '../utils';
import { show, hide } from '../actions/AlertActions'

class ResultItem extends Component{

	constructor(props) {
		super(props)
		this.state = {
			selectValue: 1
		}
		this.handleChange = this.handleChange.bind(this);
    	this.handleClick = this.handleClick.bind(this);
	}

    handleChange(event) {
    	this.setState({selectValue: event.target.value});
  	}

    handleClick(event) {
    	const { id, laboratorio, nome, valor_unitario } = this.props
    	let data = {
    		id,
    		laboratorio,
    		nome,
    		valor_unitario,
    		quantidade: this.state.selectValue
    	}
    	this.props.addToCart(data)
    	this.props.show('O item foi adicionado ao Carrinho')
    	event.preventDefault()
	}

    render(){
        return(
        	<div className="col-md-3 line">
        		<div className="card h-100">
        			<img className="card-img-top" src={this.props.avatar} 
        			 alt={this.props.ggrem} />
				  	<div className="card-body h-100">
				    	<table className="table table-sm">
				    		<thead>
				    		<tr>
				    			<th colSpan="2">{this.props.nome}</th>
				    		</tr>
				    		</thead>
				    		<tbody>
				    		<tr>
				    			<th>Laboratório</th>
				    			<td>{this.props.laboratorio}</td>
				    		</tr>
				    		<tr>
				    			<th>Apresentação</th>
				    			<td>{this.props.apresentacao}</td>
				    		</tr>
				    		<tr>
				    			<th>Valor Unitário</th>
				    			<td>{formatMoeda(this.props.valor_unitario)}</td>
				    		</tr>
				    		</tbody>
				    	</table>
				    </div>
				    <div className="card-footer">
				    	<form onSubmit={this.handleSubmit}>
					    	<div className="form-row">
						    	<select className="form-control col-md-5" defaultValue={this.state.selectValue} onChange={this.handleChange}>
						    		{this.props.dropdown_options.map((option) => <option key={option} value={option}>{option}</option>)}
						    	</select>
						    	<div className="col-md-5 offset-md-2">
						    		<input type="button" className="btn btn-primary" value="Reservar" onClick={this.handleClick}/>
						    	</div>
						    </div>
						</form>
				  	</div>
                </div>
        	</div>
        );
    }
}

export default connect(null, { addToCart, show, hide }) (ResultItem);