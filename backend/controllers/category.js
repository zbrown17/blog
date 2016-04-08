var express = require('express'),
    Category = require('../models/category');


var categoryRoutes = express.Router();

categoryRoutes.route('/')
    .get(function(req, res) {
        res.send();
    })
    .post(function(req, res) {
        res.send();
    })
    .delete(function(req, res) {
        res.send();
    });


module.exports = categoryRoutes;