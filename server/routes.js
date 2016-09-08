var express = require('express');
var app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Load Express Configuration
require('./expressConfig')(app, express);

// Root route
app.get('/', function(req, res){
  res.sendfile('index.html', {root: app.settings.views});
});


var db;

MongoClient.connect('mongodb://localhost/feedme', (err, database) => {
  if (err) return console.log(err)
  db = database;
})

app.get('/getItems', (req, res) => {
  db.collection('items').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.json(result);
  })
})

app.get('/getItem/:id', (req, res) => {
  var objectId = new ObjectID(req.params.id);
  db.collection('items').find({_id: objectId}).toArray((err, result) => {
    if (err) return console.log(err)
    res.json(result);
  })
})


app.post('/updateItem', (req, res) => {
  var objectId = new ObjectID(req.param('id'));

  var data = {
    'edate': req.param('edate'),
    'qty': req.param('qty'),
    'location': req.param('location'),
  };
  db.collection('items').update({ _id: objectId}, {$set: data}, function (err, result) {
      res.redirect('/');
  });
})


app.get('/getCats', (req, res) => {
  db.collection('cats').find().sort({catName : 1}).toArray((err, result) => {
    if (err) return console.log(err)
    res.json(result);
  })
})

module.exports = app;
