var express = require('express');
var router = express.Router();
var db = require('../models');
var sequelize = require('../app.js').sequelize;

/* GET home page. */
router.get('/', function (req, res) {
    var featured;
    var sponsored;
    //go get all items from db with specific query
    Promise.resolve()
        .then(function () {
            return db.Post.findAll({
                where: {
                    featured: {
                        $eq: 1
                    }
                }
            });
        })
        .then(function (featData) {
            featured = featData;
            return db.Post.findAll({
                where: {
                    sponsored: {
                        $eq: 1
                    }
                }
            });
        })
        .then(function (sponsorData) {
            sponsored = sponsorData;
            res.render('index', {posts: featured, sponsored: sponsored});
        });
});

/* GET home page. */
router.get('/category', function (req, res) {
    //go get all items from db with specific query
    Promise.resolve()
        .then(function () {
            return db.Post.findAll({
                where: {
                    category: req.query.category
                }
            });
        })
        .then(function (posts) {
            res.render('category', {posts: posts});
        });

});

/* GET post . */
router.get('/post', function (req, res) {
    //go get all items from db with ids... render in list
    Promise.resolve()
        .then(function () {
            return db.Post.findAll({
                where: {
                    id: {
                        $ne: 0
                    }
                }
            });
        })
        .then(function (posts) {

            res.render('post', {posts: posts});
        });

});


router.get('/newPost', function (req, res) {
    res.render('newPost', {title: 'Hello THere'});
});

router.post('/newPost', function (req, res) {
    // insert to db here
    //// create promise chain
    db.Post.create({
        category: req.body.category,
        title: req.body.title,
        description: req.body.description,
    });

    //surround with for loop
    db.Ingredient.create({
        amount:req.body['amount_' + i],
        unit:req.body['unit_' + i],
        description: req.body['description' + i]
        post_id:

    });
    
    res.render('showPost', {
        title: 'Submit',
        category: req.body.category,
        title: req.body.title,
        description: req.body.description
    });
});

router.get('/showPost', function (req, res) {
    Promise.resolve()
        .then(function () {
            return db.Post.findOne({
                where: {
                    id: req.query.id
                }
            });
        })
        .then(function (post) {

            res.render('showPost', {

                title: 'Display',
                category: post.category,
                title: post.title,
                description: post.description
            });
        });

});
module.exports = router;
