// public/js/controllers/NerdCtrl.js
angular.module('EventCtrl', []).controller('EventController', function($scope) {

    $scope.range = function(min, max, step) {
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) {
        input.push(i);
    }
    return input;
};

	//Event variables
	$scope.eventName = "LARP Party";
	$scope.eventHost = "John smith";//reference to user profile
	$scope.eventDate = "09/10/2040";
	$scope.eventLocation = "110 8th Street, Troy, NY";
	
});

