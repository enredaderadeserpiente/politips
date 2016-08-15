import express from "express";  
import React from "react";
import { createMemoryHistory, match, RouterContext } from 'react-router'  
import { createLocation, createHistory } from 'history';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, Redirect} from 'react-router';
import store from './store';
import routes from "./routes";

const app = express();

app.use(express.static('public'));

app.get('/*', function (req, res) {
  const history = createMemoryHistory();
  history.push(req.originalUrl);

  const content = ReactDOM.renderToString(<Provider store={store}><Router history={history} routes={routes}></Router></Provider>);
  res.render('../src/index.jade', {content: content});
});

var server = app.listen(3000, function () { console.log('ready'); });
