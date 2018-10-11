var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
        .when('/animate/page_home', {
            templateUrl: 'animate/page_home',
            controller: 'mainController'
        })
        .when('/animate/about', {
            templateUrl: 'animate/about',
            controller: 'aboutController'
        })
        .when('/animate/contact', {
            templateUrl: '/animate/contact',
            controller: 'contactController'
        })
        .when('/animate/index', {
        templateUrl: '/animate/index',
        controller: 'indexController'
    });

});

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'animate/page_home';
});

animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'animate/about';
});

animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'animate/contact';
});

animateApp.controller('indexController', function($scope) {
    $scope.pageClass = 'animate/index';
});