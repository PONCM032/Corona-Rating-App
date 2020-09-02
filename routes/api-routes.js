// Requiring our models and passport as we've configured it
var db = require('../models');
var passport = require('../config/passport');
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.post("/api/register", function (req, res) {
    console.log("registering user");
  
    //****
    //Do validation here before attempting to register user, such as checking for password length, capital letters, special characters, etc.
    //****
    //public no middleware
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.json("user registered");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  
  });
  
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    console.log('logged in')
    res.json(req.user);
  });
  
  app.get("/api/logout", function (req, res) {
    req.logout();
    
    res.json({ message: "logged out" });
  });
  
  app.get("/api/user", function (req, res) {
    if (req.query.username) {
      db.User.find({
        where: {username: req.query.username}
      }).then(function(result) {
        res.json(result ? {length: result.length} : {length: 0});
      }).catch(function(err){
        res.json(err);
      })
    } else {
      res.json({ message: "no username entered for query" });
    }
  });
  
  app.get("/api/authorized", isAuthenticated, function (req, res) {
    res.json(req.user);
  });


  // Route for getting some data about our user to be used client side
  app.get('/api/user/reviews', (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      
      db.UserRatings.findAll({ where: { userID: req.user.id } }).then((ratings) => {
        res.json({
          email: req.user.email,
          id: req.user.id,
          ratings,
        });
      });
    }
  });

  // Add a review
  app.post('/api/review', function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      const reviewParams = req.body;

      console.log('new review:');
      console.log(req.body);
      db.UserRatings.create({
        
        ...reviewParams, //..save content of object instead of setting object to specific key....basically instead of req.body.businessName, req.body.businessType...etc
        userID: req.user.id,
      }).then(function(results) {
        res.json(results);
      }).catch(err => {
        console.log(err);
      });
    }
  });

  // Delete a Review
  app.delete('/api/review/:id', function(req, res) {
    console.log('review ID:');
    console.log(req.params.id);
    if (req.user) {
      db.UserRatings.destroy({
        where: {
          id: req.params.id,
          userID: req.user.id,
        },
      }).then(function() {
        res.end();
      });
    } else {
      res.end();
    }
  });

  app.get('/api/reviews/:lat/:lng', function(req,res){
    db.UserRatings.findAll({where:{lat:req.params.lat, lng:req.params.lng}})
    .then(function(data){
      res.json(data);
    }).catch(err => {
      console.log(err)
    });
  })



//edit review
  app.put('/api/review/:id', function(req, res) {
    console.log('review ID:');
    console.log(req.params.id);
    db.UserMovies.update(req.body, {
      where: {
        id: req.params.id,
        userID: req.user.id,
      },
    }).then(function(results) {
      res.json(results);
    }).catch(err => {
      console.log(err)
    });
  });
};

  