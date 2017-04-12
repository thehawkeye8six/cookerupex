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

router.get('/showPost', function (req, res) {
    Promise.resolve()
        .then(function () {
            return db.Post.findOne({
                where: {
                    id: req.query.id
                },
                include: [db.Ingredient]
            });
        })
        .then(function (post) {
            res.render('showPost', {
                category: post.category,
                title: post.title,
                description: post.description,
                ingredient: post.Ingredients,
                directions: post.directions,
                image_path: post.image_path
            });
        });
});

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

router.get('/search', function (req, res) {
    //go get all items from db with specific query
    Promise.resolve()
        .then(function () {
            return db.Post.findAll({
                where: {
                    title: {
                        $like: '%' + req.query.title + '%'
                    }
                }
            });
        })
        .then(function (posts) {
            res.render('search', {posts: posts});
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
    var newRecipeId;
    //// create promise chain
    Promise.resolve()
        .then(function () {
            return db.Post.create({
                category: req.body.category,
                title: req.body.title,
                description: req.body.description,
                directions: req.body.directions,
                image_path: req.body.image_path
            });
        })
        .then(function (recipe) {
            var promises = [];
            newRecipeId = recipe.id;
            for (var i = 1; ; i++) {
                if (req.body['ingredient' + i]) {
                    promises.push(
                        Promise.resolve(i)
                            .then(function (i) {
                                return db.Ingredient.create({
                                    //surround with for loop
                                    ingredient: req.body['ingredient' + i],
                                    amount: req.body['amount' + i],
                                    unit: req.body['unit' + i],
                                    PostId: recipe.id
                                });
                            }))
                } else {
                    break;
                }
            }
            return Promise.all(promises);
        })
        .then(function () {
            res.redirect('showPost?id=' + newRecipeId);
        })
});
module.exports = router;
