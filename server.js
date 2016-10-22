var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var config = require('./config.js');
var profileCtrl = require('./profileCtrl');
var userCtrl = require('./userCtrl');

var app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({secret: config.sessionSecret}));

var corsOptions = {
  origin: 'http://localhost:7878'
};




var port = 7878;
app.listen(port, function(){
  console.log('listening on port ' + port);
});
