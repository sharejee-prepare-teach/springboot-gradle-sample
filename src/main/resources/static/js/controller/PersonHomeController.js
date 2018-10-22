'use strict';

appPerson.controller('PersonHomeController', ['async', function(async) {
    var self = this;
    self.items=async;
}]);
appPerson.controller( "PersonHomeA1Controller",function($scope,$http){
    $scope.name = null;
    $scope.lblMsg = null;
    $scope.postdata = function (name) {
        var data = {
            name: name
        };
    $http.post('/item/save', JSON.stringify(data)).then(function (response) {
        if (response.data){
            $scope.msg = "Post Data Submitted Successfully!";
        }
        },function (response) {
        $scope.msg = "Service not Exists";
        $scope.statusval = response.status;
        $scope.statustext = response.statusText;
        $scope.headers = response.headers();
    });
    };
});
appPerson.controller( "PersonHomeEditController",function($scope,$http,$route){
    $scope.name = null;
    $scope.lblMsg = null;
    $scope.postdata = function (name) {
        var data = {
            id:$route.current.params.id,
            name: name
        };
        $http.post('/item/personupdateSave/'+data.id, JSON.stringify(data)).then(function (response) {
           alert("Update Success!")
        },function (response) {
            $scope.msg = "Service not Exists";
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        });
    };
});