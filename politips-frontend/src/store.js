import thunk from 'redux-thunk';
import auth from './reducers/auth';
import legislators from './reducers/legislators';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';

const store = createStore(
  combineReducers({
    auth: auth,
    legislators: legislators,
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