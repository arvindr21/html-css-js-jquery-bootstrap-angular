// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .factory('MyFactory', function($http) {
        return {
            get: function() {
                return $http.get("http://jsonplaceholder.typicode.com/users");
            }
        };
    })
    .controller('MyController', function($scope, MyFactory) {
        $scope.items = [];
        var count = 5;

        function getData() {
            MyFactory.get()
                .then(function(resp) {
                  //$scope.items = resp.data;
                  $scope.items.push.apply($scope.items, resp.data);
                }).finally(function () {
                  //$scope.$broadcast('scroll.refreshComplete');
                  $scope.$broadcast('scroll.infiniteScrollComplete');
                });
        }
        $scope.doRefresh = function () {
          count--;
          getData();
        }
        $scope.moreDataCanBeLoaded =  function() {
          if(count){
            return true;
          } else {
            return false;
          }
        }
        getData();
    })
