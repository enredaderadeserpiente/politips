import thunk from 'redux-thunk';
import authReducer from './Politips/Auth/reducers';
import legislatorsReducer from './Politips/Legislators/reducers';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';

const store = createStore(
  combineReducers({
    auth: authReducer,
    legislators: legislatorsReducer,
    routing: routerReducer,
  }),
  compose(
    applyMiddleware(thunk),
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

persistStore(store, {
  "whitelist": ['auth']
});

export default store;