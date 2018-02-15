var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var ApiRouter = require('./routes/ApiRouter');
var FrontendRouter = require('./routes/FrontendRouter');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app'));
app.use(express.static(path.join(__dirname, '../app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/', ApiRouter);
app.use('/', FrontendRouter);

app.listen(port, () => {
  console.log('Running at localhost: ' + port);
});

module.exports = app;
