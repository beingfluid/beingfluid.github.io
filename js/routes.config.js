angular.module( 'being-fluid' )
    .config( RoutesConfig );

RoutesConfig.$inject = ["$routeProvider"];

function RoutesConfig ( $routeProvider ) {
    console.log( "here" );
    $routeProvider
        .when( '/home', {
            templateUrl: '../home.html',
            controller: 'HomeController',
            controllerAs: 'ctrl'
    } ).when( '/about', {
       template: "<about></about>"
    } ).when( '/contact', {
       templateUrl: '../contact.html'
    } ).otherwise( {
        redirectTo:"/home"
    });
}
