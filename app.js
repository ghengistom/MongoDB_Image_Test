var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var routes = require('./routes/index');
var users = require('./routes/users');

//To get the access for the functions defined in index.js class
var routes = require('./routes/imagefile');


var app = express();


var routes = require('./routes/imagefile');


//URL : http://localhost:3000/images/
// To get all the images/files stored in MongoDB
app.get('/images', function(req, res) {
//calling the function from index.js class using routes object..
  routes.getImages(function(err, genres) {
    if (err) {
      throw err;

    }
  res.json(genres);

  });
});



//Pulled from stack overflow http://stackoverflow.com/questions/9844564/render-image-stored-in-mongo-gridfs-with-node-jade-express
app.get('/data/:imgtag', function(req, res) {
  fileRepository.getFile( function(error,data) {
     res.writeHead('200', {'Content-Type': 'image/png'});
     res.end(data,'binary');
  }, req.params.imgtag );
});



// URL : http://localhost:3000/images/(give you collectionID)
// To get the single image/File using id from the MongoDB
app.get('/images/:id', function(req, res) {

  //calling the function from index.js class using routes object..
  routes.getImageById(req.params.id, function(err, genres) {
    if (err) {
    throw err;
    }
    //res.download(genres.path);
    res.send(genres.path)
    });
});





  app.get('/pics', function(req, res) {
        console.log("Get cake function");
        model.find(function (err, doc) {
            if (err) return next(err);
        var base64 = (doc[0].img.data.toString('base64'));
         res.send(base64);
        });
    });











app.listen(3000);

console.log('Running on port 3000');






// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
