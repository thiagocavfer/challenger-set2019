import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import CartReducer from './CartReducer'
import AlertReducer from './AlertReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  cart: CartReducer,
  alert: AlertReducer,
})
