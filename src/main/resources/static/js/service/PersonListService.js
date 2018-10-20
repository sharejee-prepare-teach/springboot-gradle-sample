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
                        /*console.error('Error while fetching Items');*/
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
                       /!* console.error('Error while fetching specific Item');*!/
                        return $q.reject(errResponse);
                    }
                );
        }
        ,
        fetchSpecificUpdatePerson: function(category,id) {
            return $http.get('http://localhost:8081/item/'+category+'/'+id)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                        /!* console.error('Error while fetching specific Item');*!/
                        return $q.reject(errResponse);
                    }
                );
        }
    };

}]);
