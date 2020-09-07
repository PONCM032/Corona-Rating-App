// Requiring necessary npm packages
require("dotenv").config();
const mysql = require("mysql2")
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
const path = require("path");
// const favicon = require('serve-favicon');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 5000;
db = require("./models");

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
}

const publicPath = path.join(__dirname, 'client', 'public');
// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
// app.use(favicon(__dirname + `../client/public/favicon.ico`))
// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes

require("./routes/api-routes.js")(app);

//connect to mysql db
mysql.connect(process.env.NODE_ENV || "mysql://dwecv9d4dfkccp36:ifm6h1thd76tozw3@d1kb8x1fu8rhcnej.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/towae559d6bhpmxo")

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
