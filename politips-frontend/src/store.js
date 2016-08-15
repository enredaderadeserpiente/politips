import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import legislatorsReducer from './reducers/legislatorsReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'

const store = createStore(
  combineReducers({
    auth: authReducer,
    legislators: legislatorsReducer,
    routing: routerReducer,
  }),
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);

persistStore(store, {
  "whitelist": ['auth']
});

if (typeof window != 'undefined') {
  window.store = store;
  const history = syncHistoryWithStore(browserHistory, store)
}

export default store;