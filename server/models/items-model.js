var _ = require('lodash');
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
var db;


module.exports = {

  
  get: function(id) {
    return _.find(items, function(item){
      return item.id === id;
    });
  },
  all: function(app) {
    app.db.collection('items').find().toArray((err, result) => {
        if (err) return console.log(err)
        return result;
    })
  }
}