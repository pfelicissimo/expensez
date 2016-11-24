(function () {

    angular.module('app')
        .controller('EntradaController', ['$scope', '$http',
            function ($scope, $http) {

                $scope.entradas = []
                $scope.load = load


                $scope.load()

                // functions

                function load(){
                    $http.get('/api/entrada')
                        .then(function(result){

                            $scope.entradas = result.data
                        }, function(err){

                            console.error(err)
                        })
                }
            }
        ])

})()