var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    morgan = require('morgan'),
    cors = require('cors'),
    expressJwt = require('express-jwt');

mongoose.connect(config.database);

var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(config.port, function () {
    console.log("Gavin's blog backend is running on localhost:" + config.port)
})

app.use('/api', expressJwt({secret: config.secret}));
app.use('/auth', require('./controllers/user'));
app.use('/api/posts', require('./controllers/posts'));
app.use('api/categories', require('./controllers/category'));

