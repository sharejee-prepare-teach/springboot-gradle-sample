
var app = angular.module("PersonManagement",[]);

app.controller("PersonController",function ($scope,$http) {

    $scope.persons = [];
    $scope.personOb = {
        id: 1,
        name: ""
    };
/*
    $scope.person = {
        id: 1,
        name: ""
    };*/

    _refreshPersonData();

    $scope.submitPerson = function () {
      var method = "";
      var url = "";

      if ($scope.personOb.id == -1){
          alert("personOb.id == -1");
          method == "POST";
          url = '/persons';
      }else{
          alert("else personOb.id == 1");
          method == "PUT";
          url = '/persons';
      }

      $http({
          method: method,
          url: url,
          data: angular.toJson($scope.personOb),
          headers:{
              'Content-Type': 'application/json'
          }
      }).then(_success,_error);
        /*if ($scope.person.id == -1){
            method == "POST";
            url = '/persons';
        }else{
            method == "PUT";
            url = '/persons';
        }

        $http({
            method: method,
            url: url,
            data: angular.toJson($scope.person),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(_success,_error);*/
    };

    function _success(res) {
        _refreshPersonData();
        _clearHelperData();
    }

    function _clearHelperData() {
        $scope.personOb.id = -1;
        $scope.personOb.name = "";
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
        $scope.personOb.id = person.id;
        $scope.personOb.name = person.name;
    };
});
