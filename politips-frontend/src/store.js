import thunk from 'redux-thunk';
import authReducer from './Politips/Auth/reducers';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';

const store = createStore(
  combineReducers({
    auth: authReducer,
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

export default store;
