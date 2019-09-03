import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class Alert extends Component {

	render() {
		if (!this.props.visible) return null
		return (
			<div className="alert alert-success alert-dismissible fade show" id="alert2" role="alert">
			    {renderHTML(this.props.text)}
			    <button onClick={this.props.onPress} type="button" className="close" data-dismiss="alert" aria-label="Close">
			    <span aria-hidden="true">&times;</span>
			    </button>
			</div>
		)
	}
}

export default Alert
