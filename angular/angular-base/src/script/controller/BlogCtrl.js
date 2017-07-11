angular.module('controllers').controller('BlogCtrl', [
    '$scope',
    '$route',
    '$routeParams',
    '$BlogManage',
    function(
        $scope,
        $route,
        $routeParams,
        $BlogManage
    ) {
        $BlogManage.fetchPosts().then(function(data) {
            console.log(data);
            $scope.blog = data.data;

            // $scope.title = data.data.title.rendered;
        })
    }
])