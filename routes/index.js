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
                    id: {
                        $ne: 0
                    }
                }
            });
        })
        .then(function(posts){
            console.log("posts:" + posts.length);
            res.render('index', {posts: posts});
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
        post_description: req.body.post_description
    });
    db.Ingredient.create({

    });
    //db.

    res.render('showPost', {
        title: 'Submit',
        post_category: req.body.post_category,
        post_title: req.body.post_title,
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
