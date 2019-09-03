import React, { Component } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox.js';
import Results from './Results.js';
import Alert from './Alert';
import { connect } from 'react-redux'
import { hide } from '../actions/AlertActions'


class Products extends Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	searchResults: [],
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
                <Alert onPress={() => this.props.hide()} visible={this.props.alert.visible} text={this.props.alert.text} />
                <div className="clear">
                	<Results searchResults={this.state.searchResults} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    }
}

export default connect(mapStateToProps, { hide }) (Products)