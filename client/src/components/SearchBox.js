import React, { Component } from 'react';

class SearchBox extends Component{
	constructor(props) {
		super(props)
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
  				<div className="form-group">
        			<input type="text" className="form-control" ref="query" id="search" placeholder="Entre com um Nome, Laboratório ou Princípio Ativo" onChange={this.handleChange} />
        		</div>
            	<input className="btn btn-primary" type="submit" value="Pesquisar" />
            </form>
        );
    }

    handleChange(event) {
    	this.setState({value: event.target.value});
  	}

    handleSubmit(event) {
    	var url = `http://localhost/api/medicamentos/search/${this.state.value}`;
		this.props.search(url)
	    event.preventDefault()
	}
}

export default SearchBox;