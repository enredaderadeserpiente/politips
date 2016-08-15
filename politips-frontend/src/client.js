import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store from './store';
import routes from './routes';

import { render } from 'react-dom'
import { browserHistory } from 'react-router';

render(
<Provider store={store}>
  <Router history={browserHistory}>
    {routes}
  </Router>
</Provider>
, document.getElementById('app'))
