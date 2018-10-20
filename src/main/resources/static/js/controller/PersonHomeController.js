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

/*appPerson.controller( "PersonHomeA2Controller",function($scope,$http){
    alert("ID: "+$scope.id);
    $scope.name = null;
    $scope.lblMsg = null;
    $scope.putdata = function (id,name) {
        var data = {
            id: id,
            name: $scope.name
        };
        alert("Data name: "+data.name + "Data ID: "+data.id);
        /!*$http.put('/items/edit/' + data.id)
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;
            })
            .error(function (data, status, header, config) {
            $scope.ServerResponse =  htmlDecode("Data: " + data +
                "\n\n\n\nstatus: " + status +
                "\n\n\n\nheaders: " + header +
                "\n\n\n\nconfig: " + config);
        });*!/
    };
});*/

/*appPerson.controller( "PerHomeDetailController",function($scope,$http){
    $scope.name = null;
    $scope.lblMsg = null;
    //$http GET
    alert("ID Test: "+$scope.id + "; Name: "+$scope.name)
  /!* $http.get('/item/detail/'+$scope.id, function successCallback(response) {

     alert("User has updated Successfully")

   }, function errorCallback(response) {

      alert("Error. while updating user Try Again!");

    });*!/
});*/
