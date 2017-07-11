angular.module('starkapp').directive('appHead', [function() {
    return {
        restrict: 'A',
        templateUrl: 'view/common/head.html'
    }
}])