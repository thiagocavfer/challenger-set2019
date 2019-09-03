import React, { Component } from 'react';
import ResultItem from './ResultItem.js';

class Results extends Component{
    render(){
    	var resultItems = this.props.searchResults.map(function(medicamento){
    		return <ResultItem key={medicamento.id}
                               id={medicamento.id}
    						   nome={medicamento.nome}
    						   avatar={medicamento.avatar}
    						   laboratorio={medicamento.laboratorio}
    						   apresentacao={medicamento.apresentacao}
    						   valor_unitario={medicamento.valor_unitario}
    						   dropdown_options={this.getOptions(medicamento.estoque_inicial)}
    						   />
    	}.bind(this))
        return(
            <div className="row">
                {resultItems}
            </div>
        );
    }

    getOptions(max) {
    	var options = []
    	for (var i = 1; i <= max; i++) {
    		options.push(i)
    	}
    	return options
    }

}

export default Results;
