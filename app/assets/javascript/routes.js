angular.module('FeedMe').config(function($routeProvider){
  $routeProvider
  .when('/',{
    redirectTo: '/itemList'
  })
  .when('/itemList', {
    templateUrl: "assets/templates/items/items.html",
    controller: "ItemController"
  })
  .when('/editItem/:id', {
    templateUrl: "assets/templates/items/edit.html",
    controller: "EditItemController"
  })
  .when('/add', {
    templateUrl: "assets/templates/items/add.html",
    controller: "AddItemController"
  })
});
