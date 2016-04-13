var express = require('express'),
    Post = require('../models/posts'),
    _ = require('underscore-node'),
    qmw = require('../middleware/query');


var postRoutes = express.Router();

postRoutes.route('/')
    .get(function (req, res) {
        Post.find({}, qmw(function (posts){
            res.send(posts)
        }));
    })
    .post(function (req, res) {
        var blogPost = req.body;
        var now = new Date();
        blogPost.date_created = now;
        blogPost.date_updated = now;
        Post.create(blogPost, qmw(function (newPost) {
            res.send(newPost)
        }));
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
        Post.update({_id: id}, changedPost, qmw(function (postChanged) {
            res.send(changedPost);
        }));
    })
    .delete(function (req, res) {
        var id = req.params.id;
        Post.remove({_id: id}, function (err, removed) {
            res.send(removed);
        });
    })

module.exports = postRoutes;