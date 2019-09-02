import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import Header from './Header'
import HomeComponent from './HomeComponent'
import ProductsComponent from './ProductsComponent'



class App extends Component {
  render () {
    return (
       <BrowserRouter>
        <div>
          <Header />
          <Redirect exact path='/' to='/produtos' />
          <Switch>
            <Route exact path='/home' component={HomeComponent} />
            <Route exact path='/produtos' component={ProductsComponent} />
          </Switch>
        </div>
       </BrowserRouter>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))



