import React from "react";
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store from './store';
import routes from "./routes";

import express from "express";  
import { createMemoryHistory } from 'react-router'  
import { createLocation, createHistory } from 'history';
import ReactDOM from 'react-dom/server';


const app = express();

app.use(express.static('public'));

app.get('/*', function (req, res) {
  const history = createMemoryHistory(req.originalUrl);
  const content = ReactDOM.renderToString(
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  );
  res.render('../src/index.jade', {content: content});
});

var server = app.listen(3000, function () { console.log('ready'); });
