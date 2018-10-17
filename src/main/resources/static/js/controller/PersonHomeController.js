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

    $scope.updatePerson = function() {
        $http({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/users/' + $scope.user.id,
            data: $scope.user

        }).then(function successCallback(response) {
            alert("User has updated Successfully")
        }, function errorCallback(response) {
            alert("Error. while updating user Try Again!");
        });
    }
});

