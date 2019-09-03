import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import reducers from '../reducers'
import ReduxThunk from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router']
}


export const history = createBrowserHistory()
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose


export default function configureStore(preloadedState) {
  const store = createStore(
    persistReducer(persistConfig, reducers(history)),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        ReduxThunk
        ),
    ),
  )

  return store
}