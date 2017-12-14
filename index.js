var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var orm = require('./ormlite');
var conString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/ormlite';
var Users = new orm(conString,'test_user');

app.set('view engine', 'ejs');

//get all function
app.get('/', function(req, res){
  Users.getAll(function(data){
  });
  res.render('index',{});
});

//find user by id
app.get('/id/:id', function(req, res){
  Users.findById(req.params.id, function(data){
  });
res.render('index',{});
});

//verify sequelize connection
app.get('/verify', function(req, res){
  Users.authenticate(function(data){
  });
});


//No modifications below this line!

//if no routes are matched, return a 404
app.get('*', function(req, res) {
    res.status(404).send('404 error');
});

//have the application listen on a specific port
app.listen(port, function () {
    console.log("App is running on port " + port);
});
