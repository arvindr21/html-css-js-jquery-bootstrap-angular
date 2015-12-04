var movieApp = angular.module("MovieApp", ['ngRoute']);

// movieApp.factory("MovieDataFactory", function(MovieData){
// 	var movies;
// 	MovieData.get().then(function(response){
// 		movies = response.data;
// 		console.log(response.data);
// 	});
// 	return {
// 		getMovies: function(){
// 			return movies;
// 		},
// 		getMovie: function(id){
// 			return movies[id];
// 		}
// 	}
// });
movieApp.factory("MovieData", function($http){
	return {
		get: function(){
			return $http.get("movies.json");
		}
	}
});

movieApp.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "tmpl/home.html",
		controller: "MovieCtrl"
	})
	.when("/movie/:id", {
		templateUrl: "tmpl/movie.html",
		controller: "mCtrl"
	})
	.when("/book/:id",{
		templateUrl: "tmpl/book.html",
		controller: "mCtrl"
	})
	.otherwise({
		redirectTo: "/"
	});
});

movieApp.controller("MovieCtrl", function ($scope, MovieData) {
	MovieData.get().then(function(response){
		$scope.movieData = response.data;
		console.log(response.data);
	});
});
movieApp.controller("mCtrl", function($scope, $routeParams, MovieData){
	MovieData.get().then(function(response){
		//console.log("MID", $routeParams.id);
		$scope.movie = response.data[$routeParams.id];
		
		$scope.getRange = function (rating) {
			var ratingRanges = [
			[1],
			[1,2],
			[1,2,3],
			[1,2,3,4],
			[1,2,3,4,5]];
			return ( ratingRanges[rating - 1] );
		}
	});
});