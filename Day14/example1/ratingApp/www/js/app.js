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
    .controller('starter.controller', function($scope) {
        var numSel = 0;
        $scope.rating = [{
            'class': "ion-ios-star-outline"
        }, {
            'class': "ion-ios-star-outline"
        }, {
            'class': "ion-ios-star-outline"
        }, {
            'class': "ion-ios-star-outline"
        }, {
            'class': "ion-ios-star-outline"
        }];

        $scope.addRating = function (index) {
          var len = $scope.rating.length;
          numSel = index + 1;
          for(var i = 0; i <= index; i++){
            $scope.rating[i].class = "ion-ios-star";
          }
          for(i = index + 1; i < len; i++){
            $scope.rating[i].class = "ion-ios-star-outline"; 
          }
          console.log(index, $scope.rating);
        }
        $scope.getNumSel = function () {
          return numSel;
        }
    });
