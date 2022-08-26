angular.module( 'being-fluid' ).controller( "ProjectsController", ProjectsController );

ProjectsController.$inject = ["$scope","$http"];

function ProjectsController($scope,$http) {
    $http.get( "../projects.json" ).then( function ( response ) {
        $scope.projects = response.data;
    } );
}