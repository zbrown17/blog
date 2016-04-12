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
        Post.create(, qmw(function (newPost) {
            res.send(newPost)
        }));
    })
    .put(function (req, res) {
        var changedPost = req.body;
        Post.update({_id: changedPost._id}, changedPost, qmw(function (postChanged) {
            res.send(postChanged)
        }));
    });

module.exports = postRoutes;