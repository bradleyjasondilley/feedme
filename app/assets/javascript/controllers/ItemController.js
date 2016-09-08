angular.module('FeedMe').controller('ItemController', function (Item, Cat, $scope) {
  $scope.items;
  $scope.cats;

  var getItems = Item.getItems();
    getItems.then(function(result) {  
    $scope.items = result;
  });

  var getCats = Cat.getCats();
    getCats.then(function(result) {  
    $scope.cats = result;
  });


  $scope.checkExpiry = function(expDate){
    var d = new Date();
    var today = new Date(d.getFullYear(),d.getMonth()+1,d.getDate());
    var exp = expDate.split("-");
    var expDate = new Date(exp[0],exp[1],exp[2]);
    
    if(today.getTime() > expDate.getTime()){
      return 'critical';
    }else if(today.getTime() == expDate.getTime()){
      return 'warn';
    }else{
      return 'okay';
    }
  }

});