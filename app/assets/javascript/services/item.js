angular.module('FeedMe')
    .factory('Item', ['$http', function($http) {
    var Item = {};

    Item.getItems = function () {
        return $http.get('/getItems');
    };

    Item.getItem = function (id) {
        return $http.get('/getItem/' + id);
    };

    return Item;
}]);