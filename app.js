var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressSanitizer = require('express-sanitizer');

// APP CONFIG
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(express.static('public'));
app.set('view engine', 'ejs');

//ROUTES

// LANDING PAGE==============================
app.get('/', function(req, res) {
  res.render('index');
});

// PORTFOLIO ROUTE===============================
app.get('/solutions', function(req, res) {
  res.render('solutions');
});

// CONTACT ROUTE===============================
app.get('/signup', function(req, res) {
  res.render('signup');
});

// LISTEN===============================================
const port = 3001;
app.listen((process.env.PORT, process.env.IP || port), function() {
  console.log(`SERVER HAS STARTED ON PORT: ${port}! 🤖`);
});
