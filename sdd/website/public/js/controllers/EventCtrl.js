// public/js/controllers/NerdCtrl.js
angular.module('EventCtrl', []).controller('EventController', function($scope, $http) {
    $http.get("/events",{"msg":"hi"})
    .then(function(response) {
    	//console.log(response);
         $scope.events = response.data;
    });	
});


  // $scope.range = function(min, max, step) {
    // step = step || 1;
    // var input = [];
    // for (var i = min; i <= max; i += step) {
    //     input.push(i);
    // }
    // return input;
	// 	};