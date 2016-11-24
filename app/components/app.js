(function () {

    angular.module('app', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                
                var entradasState = {
                    name: 'entradas',
                    url: '/entradas',
                    templateUrl: 'app/components/entrada/entrada-list.html',
                    controller: 'EntradaController'
                }

                $urlRouterProvider.otherwise('/')
                $stateProvider.state(entradasState)
            }
        ])

})()