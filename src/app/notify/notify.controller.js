(function() {
    'use strict';

    angular
        .module('mabi')
        .controller('NotifyController', NotifyController);

    /** @ngInject */
    function NotifyController($interval) {
        if (!("Notification" in window)) return;
        if (Notification.permission !== "granted") Notification.requestPermission();
        var vm = this;
        var timer;
        start();

        function start() {
            timer = $interval(function() {
                var today = new Date();
                // var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                vm.s = s;
                if (s === 0) {
                    // new Notification('嘎嘎嘎呱呱啾', {
                    //     body: "OX要開始了!"
                    // });
                }
            }, 1000);
        }

        function stop() {
            if (angular.isDefined(timer)) {
                $interval.cancel(timer);
                timer = undefined;
            }
        }
    }
})();
