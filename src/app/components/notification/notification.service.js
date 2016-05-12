(function() {
    'use strict';

    angular
        .module('mabi')
        .factory('notification', notification);

    /** @ngInject */
    function notification($interval) {
        var timer;

        var service = {
            start: start,
            stop: stop
        };

        return service;

        // function init() {
        //     if (!("Notification" in window)) return;
        // }

        function start() {
            timer = $interval(function() {
                var today = new Date();
                // var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                if (m === 57 && s === 0) {
                    if (Notification.permission === "granted") {
                        new Notification('嘎嘎嘎呱呱啾', {
                            body: "OX要開始了!"
                        });
                    } else {
                        Notification.requestPermission();
                    }
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
