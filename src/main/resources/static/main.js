var app = angular.module("EmployeeManagement", []);

// Controller Part
app.controller("EmployeeController", function($scope, $http) {
    $scope.employees = [];
    $scope.employee = {
        empId: 1,
        empNo: "",
        empName: ""
    };

    // Now load the data from server
    _refreshEmployeeData();

    // HTTP POST/PUT methods for add/edit employee
    // Call: http://localhost:8080/employee
    $scope.submitEmployee = function() {

        var method = "";
        var url = "";

        if ($scope.employee.empId == -1) {
            method = "POST";
            url = '/employee';
        } else {
            method = "PUT";
            url = '/employee';
        }

        $http({
            method: method,
            url: url,
            data: angular.toJson($scope.employee),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(_success, _error);
    };

    $scope.createEmployee = function() {
        _clearFormData();
    }

    // HTTP DELETE- delete employee by Id
    // Call: http://localhost:8080/employee/{empId}
    $scope.deleteEmployee = function(employee) {
        $http({
            method: 'DELETE',
            url: '/employee/' + employee.empId
        }).then(_success, _error);
    };

    // In case of edit
    $scope.editEmployee = function(employee) {
        $scope.employee.empId = employee.empId;
        $scope.employee.empNo = employee.empNo;
        $scope.employee.empName = employee.empName;
    };

    // Private Method
    // HTTP GET- get all employees collection
    // Call: http://localhost:8080/employees
    function _refreshEmployeeData() {
        alert("Get data");
        $http({
            method: 'GET',
            url: 'http://localhost:8080/employees.json'
        }).then(
            function(res) { // success
                $scope.employees = res.data;
            },
            function(res) { // error
                console.log("Error: " + res.status + " : " + res.data);
            }
        );
    }

    function _success(res) {
        _refreshEmployeeData();
        _clearFormData();
    }

    function _error(res) {
        var data = res.data;
        var status = res.status;
        var header = res.header;
        var config = res.config;
        alert("Error: " + status + ":" + data);
    }

    // Clear the form
    function _clearFormData() {
        $scope.employee.empId = -1;
        $scope.employee.empNo = "";
        $scope.employee.empName = ""
    };
});