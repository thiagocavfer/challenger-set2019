import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import CartReducer from './CartReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  cart: CartReducer,
})
