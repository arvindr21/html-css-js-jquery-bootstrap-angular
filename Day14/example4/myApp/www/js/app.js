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
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state("login", {
                url: "/login",
                templateUrl: "login.html",
                controller: "loginCtrl"
            })
            .state("rateMe", {
                url: "/rateMe",
                templateUrl: "rate.html",
                controller: "rateCtrl"
            })
        $urlRouterProvider.otherwise("/login");
    })
    .controller("loginCtrl", function($scope, $state) {
        $scope.user = {
            name: "",
            pwd: ""
        };
        $scope.isAuth = true;
        var authData = {
            name: "a@a.com",
            pwd: "a"
        };

        // function loading() {
        //   $ionicLoading.show({
        //     template: 'Loading...'
        //   });
        // }
        // function hiding(){
        //   $ionicLoading.hide();
        // };
        $scope.auth = function() {
            $scope.isAuth = authenticateMe();
            if (authenticateMe()) {
                $state.go("rateMe");
            }
        }

        function authenticateMe() {
            if (authData.name === $scope.user.name && authData.pwd === $scope.user.pwd) {
                return true;
            }
        }
    })
    .controller("rateCtrl", function($scope, $ionicHistory, $ionicPopup, $state) {
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
        $ionicHistory.clearHistory();

        $scope.doRefresh = function() {
            $scope.$parent.showInfo = false;
            numSel = 0;
            $scope.rating.forEach(function (e,i,l) {
                e.class = "ion-ios-star-outline";
            });
        }
        $scope.doRefresh();
        $scope.addRating = function(index) {
            var len = $scope.rating.length;
            numSel = index + 1;
            for (var i = 0; i <= index; i++) {
                $scope.rating[i].class = "ion-ios-star";
            }
            for (i = index + 1; i < len; i++) {
                $scope.rating[i].class = "ion-ios-star-outline";
            }
            //console.log(index, $scope.rating);
        }
        $scope.getNumSel = function() {
            return numSel;
        }
        $scope.$parent.setInfo = function() {
            $scope.showInfo = !$scope.showInfo;
        }
        $scope.goBack = function() {
            var prev = $ionicHistory.backTitle() || "rateMe";
            $state.go(prev);
        }
        $scope.$parent.getInfo = function() {
            return $scope.showInfo;
        }
        $scope.$parent.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Rate Me',
                template: 'This is a simple rate me application'
            });
            // alertPopup.then(function(res) {
            //     console.log('Done');
            // });
        };
    })
