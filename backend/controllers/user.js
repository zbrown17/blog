var express = require('express'),
    User = require('../models/user'),
    jwt = require('jsonwebtoken'),
    config = require('../config');


var authRoutes = express.Router();

authRoutes.route('/login')
    .post(function (req, res) {
        var userInfo = req.body;
        User.findOne({username: userInfo.username, password: userInfo.password}, function (err, user) {
            if (err) res.status(500).send(err);

            if (!user) {
                res.status(401).send({success: false, message: 'User or password incorrect'})
            } else {
                var token = jwt.sign(user, config.secret, {expiresIn: '24h'});
                res.send({token: token, success: true, message: "Here's your JWT"});
            }
        })
    });

authRoutes.route('/add-user')
    .post(function (req, res) {
        User.create(req.body, function (err, newUser) {
            if (err) {
                res.status(500).send(err);
            } else {
                var token = jwt.sign(newUser, config.secret, {expiresIn: '24h'});
                res.send({token: token, success: true, message: "Here's your JWT"});
            }
        })
    })

module.exports = authRoutes;
