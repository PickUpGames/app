// public/js/app.js
angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService']);

$(function(){   $("#header-wrapper").load("/views/header.html");  });
