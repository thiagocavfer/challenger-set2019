import React, { Component } from 'react';
import '../css/ResultItem.css';

class ResultItem extends Component{

	constructor(props) {
		super(props)
		this.state = {
			qty: 1,
			selectValue: 1,
			price: 0,
		};
		this.handleChange = this.handleChange.bind(this);
    	this.handleClick = this.handleClick.bind(this);
	}

    handleChange(event) {
    	this.setState({selectValue: event.target.value});
  	}

    handleClick(event) {
    	this.setState({
      		qty: this.props.selectValue,
      		price: this.props.valor_unitario,
    	});
    	this.props.handleTotal(this.props.valor_unitario);
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
				    			<td>{this.props.valor_unitario}</td>
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

export default ResultItem;