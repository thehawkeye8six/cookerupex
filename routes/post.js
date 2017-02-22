var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/post', function(req, res) {
  res.render('post', {title:'Hello THere'});
});

router.post('/post', function(req, res) {

});


module.exports = router;
