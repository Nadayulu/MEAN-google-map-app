//Dependencies

var express = require('express');
var mongoose = require('mongoose');
var port = process.env.PORT || 8000
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

//Express Configuration

//sets the connection to MongoDB

mongoose.connect("mongodb://localhost/MeanMapApp");

//Logging and Parsing

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components')); //serves static files when GET request is made for files such as .css
app.use(morgan('dev')); //logs with morgan
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());

//Routes

//require('./app/routes.js')(app);

//Listen
app.listen(port);
console.log('App is listening to the PORT: ' + port);