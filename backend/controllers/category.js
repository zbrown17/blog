var express = require('express'),
    Category = require('../models/category');


var categoryRoutes = express.Router();

categoryRoutes.route('/')
    .get(function(req, res) {
        Category.find({}, function(err, categories) {
            if (err) res.status(500).send(err);
            res.send(categories);
        })
    })
    .post(function(req, res) {
        Category.create(req.body, function (err, newCategory) {
            if (err) res.status(500).send(err);
            res.send(newCategory);
        })
    });

categoryRoutes.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        Category.findById(id, function (err, category) {
            if (err) res.status(500).send(err);
            res.send(category);
        });
    })
    .put(function (req, res) {
        var id = req.params.id;
        Category.update({_id: id}, req.body, function (err, changedCategory) {
            if (err) res.status(500).send(err);
            res.send(changedCategory);
        });
    })
    .delete(function(req, res) {
        var id = req.params.id;
        Category.remove({_id:id}, function (err, removedCategory) {
            res.send();
        });
    });

module.exports = categoryRoutes;