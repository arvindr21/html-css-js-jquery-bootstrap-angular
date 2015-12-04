var myApp = angular.module("MyApp", ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "home.html"
		})
		.when("/about", {
			templateUrl: "about.html"
		})
		.when("/contact", {
			templateUrl: "contact.html"
		})
		.otherwise({
			redirectTo: "/"
		});
});

myApp.controller("MyCtrl", function($scope, $location){
	$scope.isActive = function(link){
		return link === $location.path();
	}
});
