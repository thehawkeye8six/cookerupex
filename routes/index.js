var express = require('express');
var router = express.Router();
var db = require('../models');
var sequelize = require('../app.js').sequelize;


/* GET home page. */
router.get('/', function(req, res) {
  //go get all items from db with specific query
  res.render('index', { title: 'Express' });
});

/* GET post . */
router.get('/post', function(req, res) {
  //go get all items from db with ids... render in list
    db.Post.findAll({
        where: {
            id: {
                $ne: 0
            }
        }
    });

    res.render('post', {post_category:req.body.post_category,post_title:req.body.post_title,post_description:req.body.post_description});
});


router.get('/newPost', function(req, res) {
  res.render('newPost', {title:'Hello THere'});
});

router.post('/newPost', function(req, res) {
  // insert to db here
    //sequelize.query('INSERT INTO "Posts" ("id","post_category") VALUES (DEFAULT,post_category');
  db.Post.create({post_category:req.body.post_category,post_title:req.body.post_title,post_description:req.body.post_description});
  //db.
  res.render('showPost', {title:'Submit'});
});

router.get('/showPost', function(req, res) {
  //go get the id from url ... go get from db
  res.render('showPost', {title:'Hello THere'});
});
module.exports = router;
