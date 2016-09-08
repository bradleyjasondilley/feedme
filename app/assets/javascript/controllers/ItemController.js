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

});