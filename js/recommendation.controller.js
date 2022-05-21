angular.module( 'being-fluid' ).controller( "RecommendationController", RecommendationController );

RecommendationController.$inject = ["$scope","$http"];

function RecommendationController($scope,$http) {
    $http.get( "../recommendations.json" ).then( function ( response ) {
        $scope.recommendations = response.data;
    } );
}