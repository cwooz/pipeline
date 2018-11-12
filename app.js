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

// INDEX ROUTE===============================
// app.get("/home", function(req, res) {
//     res.render(home"index");
// });

// // NEW ROUTE=================================
// app.get("/home/new", function(req, res) {
//     res.render("new");
// });

// // CREATE ROUTE==============================
// app.post("/home", function(req, res) {
//     // sanitize input
//     req.body.blog.body = req.sanitize(req.body.blog.body);
//     // create blog
//     Blog.create(req.body.blog, function(err, newBlog) {
//         if(err) {
//             res.render("new");
//         } else {
//             // then, redirect to index
//             res.redirect("/home");
//         }
//     });
// });

// // SHOW ROUTE================================
// app.get("/home/:id", function(req, res) {
//     // Blog.findById(id, callback)
//     Blog.findById(req.params.id, function(err, foundBlog) {
//         if(err) {
//             // console.log(err);
//             res.redirect("/home");
//         } else {
//             res.render("show", {blog: foundBlog});
//         }
//     });
// });

// // EDIT ROUTE================================
// app.get("/home/:id/edit", function(req, res) {
//     Blog.findById(req.params.id, function(err, foundBlog) {
//         if(err) {
//             // console.log(err);
//             res.redirect("/home");
//         } else {
//             res.render("edit", {blog: foundBlog});
//         }
//     });
// });

// // UPDATE ROUTE==============================
// app.put("/home/:id", function(req, res){
//     // sanitize input
//     req.body.blog.body = req.sanitize(req.body.blog.body);
//     // Blog.findByIdAndUpdate(id, newData, callback)
//     Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
//         if(err) {
//             res.redirect("/home");
//         } else {
//             res.redirect("/home/" + req.params.id);
//         }
//     });
// });

// // DESTROY ROUTE=============================
// app.delete("/home/:id", function(req, res) {
//     //destroy blog
//     Blog.findByIdAndRemove(req.params.id, function(err) {
//         if(err) {
//             res.redirect("/home");
//         } else {
//         //redirect
//             res.redirect("/home");
//         }
//     });
// });

//LISTEN===============================================
app.listen(process.env.PORT, process.env.IP, function() {
  console.log('SERVER HAS STARTED');
});
