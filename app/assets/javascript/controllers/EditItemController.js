angular.module('FeedMe').controller('EditItemController', function (Item, Cat, $routeParams,$scope) {
  //$scope.item = Item.get({id: $routeParams.id});
  Item.getItem($routeParams.id)
    .then(function (response) {
      $scope.item = response.data[0];
    }, function (error) {
        $scope.status = 'Unable to load customer data: ' + error.message;
    });
  
});