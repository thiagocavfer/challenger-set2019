import React, { Component } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox.js';
import Results from './Results.js';

class Products extends Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	searchResults: []
		}
		this.search = this.search.bind(this);
    }

	showResults(response) {
		this.setState({
			searchResults: response.data.data
		})
	}

	search(url) {
		axios.get(url).then(function (response) {
			this.showResults(response)
		}.bind(this))
	}

    render(){
        return (
            <div className="container">
        		<h2>Busca</h2>
                <SearchBox search={this.search} />
                <br/>
                <div className="clear">
                	<Results searchResults={this.state.searchResults}/>
                </div>
            </div>
        );
    }
}

export default Products;