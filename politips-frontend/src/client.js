import 'jquery';
import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap';

import { render } from 'react-dom'
import routes from './routes'
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, Redirect} from 'react-router';

import store from './store';

render(
<Provider store={store}>
  <Router history={browserHistory} routes={routes} />
</Provider>
, document.getElementById('app'))
