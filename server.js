var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var math = require('./routes/math');

var app = express();

// make everything in the public folder accessible from the server
app.use(express.static('public'));
// parse URL encoded request bodies
app.use(bodyParser.urlencoded({extended: true}));

app.use('/math', math);

// serve index page at '/'
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(3000);
