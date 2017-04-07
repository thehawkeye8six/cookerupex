#!/usr/bin/nodejs
var debug = require('debug')('my-application');
var app = require('../app');
var db = require('../models');

Promise.resolve()
    .then(db.init)
    .then(function () {
        app.set('port', process.env.PORT || 3001);
        var server = app.listen(app.get('port'), function () {
            debug('Express server listening on port ' + server.address().port);
        });
    })
    .catch(function (err) {
        console.log('Startup execption: err');
    });
