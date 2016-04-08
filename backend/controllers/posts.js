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
        Post.create(req.body, qmw(function (postChanged) {
            res.send(postRoutes)
        }));
    })
    .put(function (req, res) {
        var changedPost = req.body;
        Post.update({_id: changedPost._id}, changedPost, qmw(function (postChanged) {
            res.send(postRoutes)
        }));
    });

module.exports = postRoutes;