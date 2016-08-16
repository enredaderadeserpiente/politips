import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import legislatorsReducer from './reducers/legislatorsReducer';
import { persistStore, autoRehydrate } from 'redux-persist'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

const store = createStore(
  combineReducers({
    auth: authReducer,
    legislators: legislatorsReducer,
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