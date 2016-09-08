angular.module('FeedMe').controller('ItemController', function (Item, Cat, $scope) {
  $scope.items;
  $scope.cats;

  Item.getItems()
    .then(function (response) {
      var items = response.data;
      console.log('items' + items);
      angular.forEach(items, function (item) {
          item.exp = $scope.checkExpiry(item.edate);
      });
      $scope.items = items;
    }, function (error) {
        $scope.status = 'Unable to load customer data: ' + error.message;
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