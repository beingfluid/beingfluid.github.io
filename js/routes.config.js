angular.module( 'being-fluid' )
    .config( RoutesConfig );

RoutesConfig.$inject = ["$routeProvider"];

function RoutesConfig ( $routeProvider ) {
    $routeProvider
        .when( '/home', {
            templateUrl: '../home.html',
            controller: 'HomeController',
            controllerAs: 'ctrl'
    } ).when( '/about', {
       template: "<about></about>"
    } ).when( '/contact', {
        templateUrl: '../contact.html',
        controller: 'ContactController'
    } ).when( '/recommendation', {
        templateUrl: '../recommendation.html',
        controller: 'RecommendationController'
    } ).otherwise( {
        redirectTo:"/home"
    });
}
