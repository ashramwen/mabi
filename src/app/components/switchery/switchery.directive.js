(function() {
    'use strict';

    angular
        .module('mabi')
        .directive('switchery', switchery);

    /** @ngInject */
    function switchery() {
        var directive = {
            restrict: 'E',
            scope: {
                on: '=ngModel',
                reverse: '=',
                ngChange: '&',
                yesText: '@',
                noText: '@'
            },
            templateUrl: 'app/components/switchery/switchery.template.html',
            replace: true,
            link: function(scope, element, attrs) {
                scope.switch = function() {
                    if (attrs.hasOwnProperty('readonly')) return;
                    scope.on = !scope.on;
                }
                if (angular.isFunction(scope.ngChange)) {
                    scope.$watch('on', function(newValue, oldValue) {
                        if (angular.isUndefined(newValue) || angular.isUndefined(oldValue)) return;
                        scope.$eval(scope.ngChange);
                    });
                }
            }
        };
        return directive;
    }

})();
