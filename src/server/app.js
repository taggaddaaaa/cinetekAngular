/**
 * Created by SabineMacMini on 09/06/2016.
 */
var passport = require('passport');
var session = require('express-session');
var Firebase = require("firebase");

var myFirebaseRef = new Firebase("https://cinetek.firebaseio.com/");

app.use(session({
  secret: 'proutygirl',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
