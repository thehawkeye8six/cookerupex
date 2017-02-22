var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
  //go get all items from db with specific query
  res.render('index', { title: 'Express' });
});

/* GET post . */
router.get('/post', function(req, res) {
  //go get all items from db with ids... render in list
  res.render('post', {title:'Hello THere'});
});


router.get('/newPost', function(req, res) {
  res.render('newPost', {title:'Hello THere'});
});

router.post('/newPost', function(req, res) {
  console.log('1');
  // insert to db here
  //db.Post.create({post_category:req.body.post_category,post_title,post_description})
  //db.
  res.render('showPost', {title:'Submit'});
});

router.get('/showPost', function(req, res) {
  //go get the id from url ... go get from db
  res.render('showPost', {title:'Hello THere'});
});
module.exports = router;
