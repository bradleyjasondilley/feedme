var _ = require('lodash');

var items = require('../models/items-model');

module.exports = function(app){
  app.get('/getItems', function(req, res){
    console.log("getitems");
  });
};
