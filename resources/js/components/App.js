import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom'
import Header from './Header'
import HomeComponent from './HomeComponent'

import ProductsComponent from './ProductsComponent'



class App extends Component {
  render () {
    return (
        <HashRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/home' component={HomeComponent} />
            <Route exact path='/' component={ProductsComponent} />
            <Route exact path='/produtos' component={ProductsComponent} />
          </Switch>
        </div>
        </HashRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
