var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//returns schema object allows for defining collection of documents/tables(rdms world)
var Schema = mongoose.Schema;

//connect to DB
mongoose.connect('mongodb://localhost:27017/test', function(err){
  if (err){
    //if error kill everything and say why
    return console.log(err);
  }
  //console.log('success');




  //my Schema
  var food = new Schema({
    name: String
  });

  //create a food now
  var Food = mongoose.model('Food', food);

  var spaghetti = new Food({
    name: 'Spicy Spaghetti'
  });

  spaghetti.save(function(err){
    if (err) {
      return console.log(err);
    }
    console.log('saved');
  })









router.get('/get-data', function(req, res, next){
  var resultArray = [];
  mongo.connect(url,function(err, db){
    assert.equal(null, err);
    var cursor = db.collection('user-data').find();
    cursor.forEach(function(doc, err){
      assert.equal(null, err);
      resultArray.push(doc);
    }, function(){
      db.close();
      res.render('index', {items: resultArray});
    });
  });
});











});




//console.log(spaghetti);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
