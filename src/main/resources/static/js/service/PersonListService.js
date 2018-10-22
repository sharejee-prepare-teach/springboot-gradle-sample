'use strict';

appPerson.factory('PersonListService', ['$http', '$q', function($http, $q){

    return {

        fetchAllItems: function() {
            return $http.get('http://localhost:8081/item/person_list')
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                        return $q.reject(errResponse);
                    }
                );
        },
        fetchSpecificItem: function(category,id) {
            return $http.get('http://localhost:8081/item/'+category+'/'+id)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                        return $q.reject(errResponse);
                    }
                );
        }/*,
        delete: function(category,id) {
            alert("Delete data: "+id);
            return $http.delete('http://localhost:8081/person#/items/'+category+'/'+id)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                        return $q.reject(errResponse);
                    }
                );
        }*/
    };

}]);
