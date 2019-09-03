import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Products from './components/Products.js';

class App extends Component{

    render(){
        return (
        	<div className="App">
	            <nav className="navbar navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand">Shopping</Link>
                    <ul className="nav justify-content-end">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Busca</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">Carrinho</Link>
                        </li>
                    </ul>
            	</nav> 
	    		<Products />
    		</div>
        );
    }
}

export default App;