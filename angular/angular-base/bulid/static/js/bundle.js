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
                .when('/activity', {
                    templateUrl: '/view/activity/index.html',
                    controller: 'ActivityCtrl'
                })
                .when('member', {
                    templateUrl: '/view/member/index.html',
                    controller: 'MemberCtrl'
                })
        }

    ]
)