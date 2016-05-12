(function() {
    'use strict';

    angular
        .module('mabi')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $timeout, $cookies) {
        var vm = this;
        vm.ranks = [{ value: 0, text: '練習' }, { value: 1, text: 'F' }, { value: 2, text: 'E' }, { value: 3, text: 'D' }, { value: 4, text: 'C' }, { value: 5, text: 'B' }, { value: 6, text: 'A' }, { value: 7, text: '9' }, { value: 8, text: '8' }, { value: 9, text: '7' }, { value: 10, text: '6' }, { value: 11, text: '5' }, { value: 12, text: '4' }, { value: 13, text: '3' }, { value: 14, text: '2' }, { value: 15, text: '1' }];
        vm.partner = true;
        vm.alpaca = true;
        vm.myRank = parseInt(getCookie('commerceRank'));

        // var ref = new Firebase('https://mabi.firebaseio.com');
        // ref.on('value', function(snapshot) {
        //     var res = snapshot.val();
        //     $timeout(function() {
        //         vm.citys = res.city;
        //         vm.conveyance = res.conveyance;
        //         vm.goods = res.good;
        //         vm.switchConveyance();
        //     });
        // }, function(errorObject) {
        //     // console.log('The read failed: ' + errorObject.code);
        // });

        vm.switchConveyance = function() {
            vm.trades = angular.copy(vm.conveyance);
            if (vm.partner && vm.alpaca) {
                vm.trades.forEach(function(o) {
                    o.space += 1;
                    o.capacity += 100;
                });
                vm.trades[2].space += 1;
                vm.trades[2].capacity += 100;
            } else if (vm.partner) {
                vm.trades.forEach(function(o) {
                    o.space += 1;
                    o.capacity += 100;
                });
            } else if (vm.alpaca) {
                vm.trades[2].space += 2;
                vm.trades[2].capacity += 200;
            }
            vm.calByCity();
        };

        vm.calByCity = function() {
            setCookie('commerceRank', vm.myRank, 30);
            vm.goods.forEach(function(good) {
                if (good.city_id == (vm.cityIndex || 0) + 1)
                    vm.cal(good);
            });
        }

        vm.cal = function(good) {
            if (!good.gain) good.gain = new Array();
            vm.trades.forEach(function(car, index) {
                good.gain[index] = earn(good, car);
            })
        }

        vm.tabSelect = function(index) {
            vm.cityIndex = index;
            vm.calByCity();
        }

        function earn(good, car) {
            var ducat;
            if (car.space * good.size * good.weight > car.capacity)
                ducat = Math.floor(car.capacity / good.size);
            else
                ducat = car.space * good.weight;
            return ducat * (good.price || 1) * (100 + vm.myRank) / 100;
        }

        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            $cookies.put(cname, cvalue, d);
        }

        function getCookie(cname) {
            var ca = $cookies.get(cname);
            return ca ? ca : "0";
        }

        vm.sheep = function() {
            var thissound = angular.element('#audio1')[0];
            thissound.play();
        }
    }
})();
