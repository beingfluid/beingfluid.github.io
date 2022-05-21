angular.module( 'being-fluid' ).controller( "ContactController", ContactController );

ContactController.$inject = ["$scope","$http"];

function ContactController($scope,$http) {
    $http.get( "../contactme.json" ).then( function ( response ) {
        $scope.contactinfo = response.data;
    } );
}