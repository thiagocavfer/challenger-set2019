import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import ProductsComponent from './ProductsComponent'



class App extends Component {
  render () {
    return (
       <BrowserRouter>
        <div>

          <Switch>
            <Route exact path='/' component={ProductsComponent} />
          </Switch>
        </div>
       </BrowserRouter>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('home'))



