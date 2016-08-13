var express = require('express');
var path = require('path');

var app = express();

var publicPath = path.resolve(__dirname, 'dist');
var port = 3000;

app.use(express.static(publicPath));

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});

