'use strict';

var appPerson = angular.module('myApp',['ngRoute']);

appPerson.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/items/person_list', {
        templateUrl: 'items/person_list',
        controller : "PersonHomeController as itemPersonHomeCtl",
        resolve: {
            async: ['PersonListService','$route', function(PersonListService) {
                return PersonListService.fetchAllItems('/item/person_list');
            }]
        }
    })
    .when('/items/home2', {
        templateUrl: 'items/home2',
        controller : "PersonHomeA1Controller as itemDetailsCtrl"
    })
    .when('/items/home', {
        templateUrl: 'items/home',
        controller : "ItemDetailsController as itemDetailsCtrl",
        resolve: {
            async: ['ItemService','$route', function(ItemService) {
                return ItemService.fetchSpecificItemHome('item/home');
            }]
        }
    })
    .when('/items/create', {
            templateUrl: 'items/create',
            controller : "PersonHomeA1Controller as itemPersonHomeCtl"
    })
    .when('/items/personedit/:id', {
        templateUrl: 'items/personedit/',
        controller : "PersonHomeEditController as itemEditController"
    })
    .when('/items/personupdate/:id', {
            templateUrl: 'items/personupdate/',
            controller : "PersonHomeA2Controller as itemPersonUpdateHomeCtl"
    })
    .when('/items/persondetail/:id', {
        templateUrl: 'items/persondetail/',
        controller : "PersonHomeDetailController as itemPerHomeDetailCtl",
        resolve: {
            async: ['PersonListService','$route', function(PersonListService , $route) {
                return PersonListService.fetchSpecificItem('detail',$route.current.params.id);
            }]
        }
    })
    .otherwise({redirectTo:'/item/home2'});
    }]

);