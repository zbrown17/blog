var express = require('express'),
    Post = require('../models/posts'),
    _ = require('underscore-node');


var postRoutes = express.Router();

postRoutes.route('/')
    .get(function (req, res) {
        var query = {},
            queryParams = req.query;
        if (_.has(queryParams, 'c') || _.has(queryParams, 'categories')) {
            query.categories = queryParams.c;
        }
        if (_.has(queryParams, 'gtd')) {
            query.datetime_created = {$gte: new Date(queryParams.gtd)}
        } else if (_.has(queryParams, 'month') && _.has(queryParams, 'year')){
            var year = queryParams.month < 11 ? queryParams.year : queryParams.year + 1;
            var firstOfMonth = new Date(queryParams.year, parseInt(queryParams.month) - 1);
            var firstOfNextMonth = new Date(year, parseInt(queryParams.month));

            query.datetime_created = {
                $gte: firstOfMonth,
                $lt: firstOfNextMonth
            }
        }

        Post.find(query, function (err, posts){
            if (err) res.status(500).send(err);
            res.send(posts);
        });
    })
    .post(function (req, res) {
        var blogPost = req.body;
        var now = new Date();
        blogPost.date_created = now;
        blogPost.date_updated = now;
        Post.create(blogPost, function (err, newPost) {
            if (err) res.status(500).send(err)
            res.send(newPost)
        });
    })


postRoutes.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        Post.findById(id, function (err, onePost) {
            res.send(onePost);
        });
    })
    .put(function (req, res) {
        var changedPost = req.body;
        var id = req.params.id;
        changedPost.date_updated = new Date();
        Post.update({_id: id}, changedPost, function (err, postChanged) {
            if (err) res.status(500).send(err)
            res.send(changedPost);
        });
    })
    .delete(function (req, res) {
        var id = req.params.id;
        Post.remove({_id: id}, function (err, removed) {
            if (err) res.status(500).send(err)
            res.send(removed);
        });
    })

module.exports = postRoutes;