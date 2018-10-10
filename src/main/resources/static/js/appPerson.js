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
        controller : "PersonHomeController2 as itemDetailsCtrl",
        resolve: {
            async: ['PersonListService','$route', function(PersonListService) {
                return PersonListService.fetchSpecificItem('/item/home2');
            }]
        }
    })
        .otherwise({redirectTo:'/item/home2'});

    }]

);