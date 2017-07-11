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
                .when('/blog', {
                    templateUrl: '/view/blog/index.html',
                    controller: 'BlogCtrl'
                })
        }

    ]
)