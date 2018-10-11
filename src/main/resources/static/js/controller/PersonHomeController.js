'use strict';

appPerson.controller('PersonHomeController', ['async', function(async) {
    var self = this;
    self.items=async;
}]);
appPerson.controller( "PersonHomeA1Controller",function($scope,person){
    $scope.person = person;
    // and then set values on the object
    $scope.person.name = "John";
});
