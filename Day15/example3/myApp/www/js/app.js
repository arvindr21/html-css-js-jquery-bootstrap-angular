// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

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
    .factory('MyData', function($http) {
        return {
            getAll: function() {
                return $http.get("http://localhost:3000/todos");
            },
            get: function(idx) {
                return $http.get("http://localhost:3000/todos/" + idx);
            },
            put: function(idx, item) {
                return $http.put("http://localhost:3000/todos/" + idx, item);
            },
            delete: function(idx) {
                return $http.delete("http://localhost:3000/todos/" + idx);
            },
            post: function(item) {
                return $http.post("http://localhost:3000/todos", item);
            }
        };
    })
    .controller('MyCtrl', function($scope, $ionicPopup, $ionicListDelegate, $cordovaLocalNotification, MyData) {
        $scope.data = {
            showDelete: false
        };
        $scope.listCanSwipe = true;
        $scope.items = [];
        $scope.item = {};
        var lastId = 0;
        getAll();

        function getAll() {
            MyData.getAll().then(function(resp) {
                $scope.items = resp.data;
                lastId = $scope.items[$scope.items.length - 1].id;
            });
        }
        $scope.editCompl = function(item) {
            MyData.put(item.id, item).then();
        }

        function addChangeTodo(placeHolder) {
            return $ionicPopup.show({
                template: '<input type="text" ng-model="item.title" placeholder="' + placeHolder + '">',
                scope: $scope,
                buttons: [{
                    text: 'Cancel'
                }, {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        if (!$scope.item.title) {
                            console.log("Enter text");
                            e.preventDefault();
                        } else {
                            return $scope.item.title;
                        }
                    }
                }]
            })
        }
        $scope.edit = function(item) {
            $scope.data.showDelete = false;
            $scope.item.title = item.title;
            var popToDo = addChangeTodo("Edit to do");
            popToDo.then(function(res) {
                //console.log('Tapped!', res);
                if (res && res.length) {
                    item.title = res;
                    $scope.item = {};
                    MyData.put(item.id, item).then(function() {
                        console.log("Edit complete");
                    });
                }
                $ionicListDelegate.closeOptionButtons();
            });

        }
        $scope.add = function() {
            var popToDo = addChangeTodo("Add a new to do");
            $scope.data.showDelete = false;
            $ionicListDelegate.closeOptionButtons();
            popToDo.then(function(res) {
                if (res && res.length) {
                    var item = {
                        userId: 1,
                        id: ++lastId,
                        title: res,
                        completed: false
                    };
                    $scope.item = {};
                    //$scope.items.push(item);
                    MyData.post(item).then(function() {
                        postNotificationOnAdd(item.title);
                        getAll();
                    });
                }
            });
        }

        function postNotificationOnAdd(title) {
            $cordovaLocalNotification.schedule({
                id: 1,
                title: 'To Do App',
                text: 'Added to-do:' + title
            }).then(function(result) {
                console.log("User notified");
            });
        }
        $scope.delete = function(item) {
            //$scope.items.splice($index, 1)
            MyData.delete(item.id).then(function() {
                // $scope.data.showDelete = false; //Uncomment if only single delete at a time
                getAll();
            });
        }
    });
