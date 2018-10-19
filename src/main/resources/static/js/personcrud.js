var app = angular.module("PersonManagement", []);

app.controller("PersonController",function ($scope,$http) {
   alert("Submit Person");
   $scope.persons = [];
   $scope.person = {
       id: 1,
       name: ""
   };

    $scope.submitPerson = function() {
        alert("Submit Person");

        var method = "";
        var url = "";

        if ($scope.name.id == -1) {
            method = "POST";
            url = '/item/save';
        } else {
            method = "PUT";
            url = '/item/edit';
        }

        $http({
            method: method,
            url: url,
            data: angular.toJson($scope.person),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(_success, _error);
    };
    // Clear the form
    function _clearFormData() {
        $scope.person.id = -1;
        $scope.person.name = "";
    }
    $scope.createPerson = function() {
        _clearFormData();
    };
});