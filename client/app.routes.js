
app.config(['$qProvider', '$urlRouterProvider', '$stateProvider', '$locationProvider',
function ($qProvider, $urlRouterProvider, $stateProvider, $locationProvider, $rootScope) {
    $urlRouterProvider.otherwise('/home')
    $stateProvider
    // .state('super', {
    //     abstract: true,
    //     controller: 'superController'
    // })
        .state('home',
            {
                url: "/home",
                templateUrl: "client/components/products-bar/products-bar.html",
                controller: "ProductListCtrl as vm"
            }
        )
        
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });
    // app.controller('superController', function ($scope, $rootScope) {
    //     $rootScope.viewMenu = function (flag) {
    //         $rootScope.viewMenuFlag = !flag;
    //     }
    // })

}]);
