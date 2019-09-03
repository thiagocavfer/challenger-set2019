import React,{ Component } from 'react'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import configureStore,{ history } from './ConfigureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import App from '../App'
import Carrinho from '../Carrinho'

const store = configureStore()

export default class RouterApp extends Component {
  render() {
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistStore(store)}>
            <ConnectedRouter history={history}>
              <Switch>
            	<Route path="/" exact={true} component={App} />
            	<Route path="/cart" component={Carrinho} />
        		</Switch>
            </ConnectedRouter>
          </PersistGate>
        </Provider>
    )
  }
}
