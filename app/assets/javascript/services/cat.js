angular.module('FeedMe').factory('Cat', function($http) {

    var getCats = function() {

        // Angular $http() and then() both return promises themselves 
        return $http({method:"GET", url:"/getCats"}).then(function(response){

            var cats = response.data;
            var newCats = {};
            var items = [];
            var currentCat = '';
            var prevCat = '';
            angular.forEach(cats, function (cat) {
                currentCat = cat.catName;
                if(prevCat == ''){
                prevCat = currentCat;
                }

                if(currentCat != prevCat){
                newCats[prevCat] = items;
                items = [];
                prevCat = currentCat;
                }

                items.push(cat.itemName);
            });
            newCats[currentCat] = items;

            return newCats;
        }, function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
    };


    return { getCats: getCats };
});