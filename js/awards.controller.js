angular.module( 'being-fluid' ).controller( "AwardsController", AwardsController );

AwardsController.$inject = ["$scope","$http"];

function AwardsController($scope,$http) {
    $http.get( "../awards.json" ).then( function ( response ) {
        $scope.contactinfo = response.data;
    } );
}
