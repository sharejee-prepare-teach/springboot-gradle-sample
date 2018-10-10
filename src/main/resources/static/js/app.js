'use strict';

var app = angular.module('myApp',['ngRoute']);
App.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home',
            controller : "ItemListController as itemListCtrl",
            resolve: {
                async: ['ItemService', function(ItemService) {
                    return ItemService.fetchAllItems('home');
                }]
            }
        }).otherwise({redirectTo:'/home'});
}]);
