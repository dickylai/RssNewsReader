var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/rssReader', err => {
  if (!err) console.log('Connected to MongoDB');
  else console.log('Cannot connect to MongoDB');
});

var apiRouter = require('./routes/api/apiRouter');
var frontendRouter = require('./routes/frontend/frontendRouter');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app'));
app.use(express.static(path.join(__dirname, '../app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/', apiRouter);
app.use('/', frontendRouter);

app.listen(port, () => {
  console.log('Running at localhost: ' + port);
});

module.exports = app;
