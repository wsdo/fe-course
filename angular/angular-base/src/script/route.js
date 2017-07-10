app.config(
    ['$routeProvider',
        function($routeProvider) {
            $routeProvider
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