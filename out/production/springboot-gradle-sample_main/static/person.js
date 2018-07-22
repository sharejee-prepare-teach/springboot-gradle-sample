
var app = angular.module("PersonManagement",[]);

app.controller("PersonController",function ($scope,$http) {

    $scope.persons = [];
    $scope.personOb = {
        id: 1,
        name: ""
    };
    $scope.person = {
        id: 1,
        name: ""
    };

    _refreshPersonData();

    $scope.submitPerson = function () {
      var method = "";
      var url = "";

      if ($scope.person.id == -1){
          alert("person.id == -1");
          alert("$scope.person.id: "+$scope.person.id)
          alert("$scope.person.name: "+$scope.person.name)
          method = "POST";
          url = '/api/persons';
          alert("method: "+method.longDesc)
      }else{
          alert("else person.id == 1");
          method = "PUT";
          url = '/api/persons';
      }

      $http({
          method: method,
          url: url,
          data: angular.toJson($scope.person),
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(_success,_error);
    };

    function _success(res) {
        _refreshPersonData();
        _clearHelperData();
    }

    function _clearHelperData() {
        $scope.person.id = -1;
        $scope.person.name = "";
    }

    function _error(res) {
        var data = res.data;
        var status = res.status;
        var header = res.header;
        //var header = res.headers;
        var config = res.config;
        alert("Error: " + status + ":" + data);
    }

    function _refreshPersonData() {

        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/persons'
        }).then(
            function (res) {
                $scope.persons = res.data;
            },
            function (res) {
                console.log("Error: " + res.status + ":" + res.data);
            }
        );
    }

    $scope.createPerson = function () {
        _clearHelperData();
    };

    // In case of edit
    $scope.editPerson = function(person) {
        $scope.person.id = person.id;
        $scope.person.name = person.name;
    };

    $scope.deletePerson = function(person) {
        $http({
            method: 'DELETE',
            url: '/api/persons/' + person.id
        }).then(_success, _error);
    };
});
