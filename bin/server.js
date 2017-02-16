#!/usr/bin/nodejs
var debug = require('debug')('my-application');
var app = require('../app');
var models = require('../models');

Promise.resolve()
  .then(models.init)
  .then(function(){
    app.set('port', process.env.PORT || 3000);
    var server = app.listen(app.get('port'), function() {
      debug('Express server listening on port ' + server.address().port);
    });
  })
  .catch(function (err) {console.log('Startup execption: err'); });
