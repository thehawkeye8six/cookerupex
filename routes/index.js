var express = require('express');
var router = express.Router();
var db = require('../models');
var sequelize = require('../app.js').sequelize;

/* GET home page. */
router.get('/', function (req, res) {
    //go get all items from db with specific query
    Promise.resolve()
        .then(function(){
            return db.Post.findAll({
                where: {
                    featured: {
                        $ne: 0
                    }
                }
            });
        })
        .then(function(posts){
            res.render('index', {posts: posts});
        });

    Promise.resolve()
        .then(function(){
            return db.Post.findAll({
                where: {
                    sponsored: {
                        $ne: 0
                    }
                }
            });
        })
        .then(function(sponsor){
            res.render('index', {sponsor: sponsor});
        });

});

/* GET home page. */
router.get('/category', function (req, res) {
    //go get all items from db with specific query
    Promise.resolve()
        .then(function(){
            return db.Post.findOne({
                where: {
                    category: req.query.category
                }
            });
        })
        .then(function(posts){
            res.render('category', {posts: posts});
        });

});

/* GET post . */
router.get('/post', function (req, res) {
    //go get all items from db with ids... render in list
    Promise.resolve()
        .then(function(){
            return db.Post.findAll({
                where: {
                    id: {
                        $ne: 0
                    }
                }
            });
        })
        .then(function(posts){

            res.render('post', {posts: posts});
        });

});


router.get('/newPost', function (req, res) {
    res.render('newPost', {title: 'Hello THere'});
});

router.post('/newPost', function (req, res) {
    // insert to db here
    db.Post.create({
        post_category: req.body.post_category,
        post_title: req.body.post_title,
        post_description: req.body.post_description,
    });
    db.Amount.create({
        amount_1: req.body.amount_1,
        amount_2: req.body.amount_2,
        amount_3: req.body.amount_3,
        amount_4: req.body.amount_4,
        amount_5: req.body.amount_5,
        amount_6: req.body.amount_6,
        amount_7: req.body.amount_7,
        amount_8: req.body.amount_8,
        amount_9: req.body.amount_9,
        amount_10: req.body.amount_10
    });

    db.Unit.create({
        unit_1: req.body.unit_1,
        unit_2: req.body.unit_2,
        unit_3: req.body.unit_3,
        unit_4: req.body.unit_4,
        unit_5: req.body.unit_5,
        unit_6: req.body.unit_6,
        unit_7: req.body.unit_7,
        unit_8: req.body.unit_8,
        unit_9: req.body.unit_9,
        unit_10: req.body.unit_10
    });
    db.Ingredient.create({
        ingredient_1: req.body.ingredient_1,
        ingredient_2: req.body.ingredient_2,
        ingredient_3: req.body.ingredient_3,
        ingredient_4: req.body.ingredient_4,
        ingredient_5: req.body.ingredient_5,
        ingredient_6: req.body.ingredient_6,
        ingredient_7: req.body.ingredient_7,
        ingredient_8: req.body.ingredient_8,
        ingredient_9: req.body.ingredient_9,
        ingredient_10: req.body.ingredient_10
    });
    //db.

    res.render('showPost', {
        title: 'Submit',
        post_category: req.body.post_category,
        post_title:
        req.body.post_title,
        post_description: req.body.post_description
    });
});

router.get('/showPost', function (req, res) {
    Promise.resolve()
        .then(function(){
            return db.Post.findOne({
                where: {
                    id: req.query.id
                }
            });
        })
        .then(function(post){

            res.render('showPost', {

                title: 'Display',
                post_category: post.post_category,
                post_title: post.post_title,
                post_description: post.post_description
            });
        });

});
module.exports = router;
