var express = require('express');
var path = require('path');

var port = 8000;

var app = express();
var App = require('./src/app.jsx')

app.use(express.static(path.join(__dirname, 'dist')));

// require('babel-core/register')({
//     presets: ['es2015', 'react']
// });

var ReactDOMServer = require('react-dom/server');

app.get('*', function(req, res) {
  ReactDOMServer.renderToString(<App />);
})

app.listen(port, function () {
  console.log('Server running on port ' + port);
});

