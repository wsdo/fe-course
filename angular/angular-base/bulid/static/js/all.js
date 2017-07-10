var app = angular.module('starkapp', [
    'ngRoute',
    // 'ngMaterial',
    'controllers',
    'services',
]);


// init submodule

angular.module('controllers', []);


angular.module('services', []);
app.config(
    ['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<div><h1>今天天气不错哦！{{msg}}</h1> </div>',
                    controller: function($scope) {
                        $scope.msg = '呵呵';
                    }
                })
                .when('/activity', {
                    templateUrl: '/view/activity/index.html',
                    controller: 'ActivityCtrl'
                })
                .when('/member', {
                    templateUrl: '/view/member/index.html',
                    controller: 'MemberCtrl'
                })
        }

    ]
)
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
            console.log(data);
            $scope.userinfo = data.data.member;
        })
    }
])

angular.module('starkapp')
    .factory('$MemberManage', [
        '$http',
        function(
            $http
        ) {
            return {
                fetchMemberInfo: function() {
                    // 此時的api是從後端過來的
                    return $http.get('/data/member.json').then(function(data) {
                        return data;
                    })
                }

            }
        }
    ])