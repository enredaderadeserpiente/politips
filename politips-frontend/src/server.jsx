import express from 'express';
import path from 'path';
import React from "react";
import ReactDOMServer from "react-dom/server";
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux';

const app = express();

import store from './store';
import routes from "./routes";

import Politips from "./Politips/Politips.jsx";

import webpack from "webpack";
import webpackConfig from "../webpack.config.js";

app.set('view engine', 'ejs');


if (process.env.NODE_ENV == 'development') {
  webpackConfig.watch = true;
}
webpack(webpackConfig, () => {}, {watch: true});

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', function(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    var content = ReactDOMServer.renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} >
          <Politips />
        </RouterContext>
      </Provider>
    );
    res.render('../public/index.ejs', {content: content});
  });

});

app.listen(8000, function () {
  console.log("frontend server started", process.env);
});

