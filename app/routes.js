//Requiring Dependencies

var mongoose = require('mongoose');
var User = require('./model.js');

// Opens App routes
module.exports = function(app) {
    //GET routes

    //retrieve all users data from the db
    app.get('/users', function(req, res) {

        var query = User.find({});
        query.exec(function(err, users) {
            if(err)
              res.send(err);

            res.json(users);
        });
    });

    //POST routes

    //creating new users in the db
    app.post('/users', function(req, res) {
        var newUser = new User(req.body);

        newUser.save(function(err) {
            if(err)
              res.send(err);

            res.json(req.body);
        })
    })
}