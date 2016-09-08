angular.module('FeedMe').factory('Item', function($http) {

    var getItems = function() {

        return $http({method:"GET", url:"/getItems"}).then(function (response) {
        var items = response.data;
        angular.forEach(items, function (item) {
            item.exp = checkExpiry(item.edate);
        });
        return items;
        }, function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
    };

    var getItem = function(id) {

        return $http({method:"GET", url:"/getItem/"}).then(function (response) {
            return response;
        }, function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
    };


    return { getItems: getItems };
});

function checkExpiry(expDate){
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