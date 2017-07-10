angular.module('controllers').controller('MemberCtrl', [
    '$scope',
    '$route',
    '$routeParams',
    '$MemberManage',
    function(
        $scope,
        $route,
        $routeParams,
        $MemberManage
    ) {
        $MemberManage.fetchMemberInfo().then(function(data) {
            $scope.userinfo = data.data.stark;
        })
    }
])