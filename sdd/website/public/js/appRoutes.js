// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/events', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })
        .when('/viewprofile',{
            templateUrl: 'views/viewprofile.html'
        })
        .when('/manageprofile',{
            templateUrl: 'views/manageprofile.html'
        })
        .when('/contactprofile',{
            templateUrl: 'views/contactprofile.html'
        })
        .when('/faqprofile',{
            templateUrl: 'views/faqprofile.html'
        })

    $locationProvider.html5Mode(true);

}]);
