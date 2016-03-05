(function() {
  'use strict';

  angular
    .module('mabi')
    .controller('DailyQuestController', DailyQuestController);

  /** @ngInject */
  function DailyQuestController($http) {
    var vm = this;

    $http.get('/api/dailyquest/').success(function(res) {
        vm.questList = res;
        var dailyDate = localStorage.getItem('dailyDate');
        var today = new Date().toDateString();
        if (today === dailyDate) {
            vm.doneList = angular.fromJson(localStorage.getItem('dailyDone'));
            if (!vm.doneList)
                vm.doneList = new Array(res.length);
        } else {
            localStorage.setItem('dailyDate', today);
            localStorage.removeItem('dailyDone');
            vm.doneList = new Array(res.length);
        }
    });

    vm.test = function() {
        // console.log('test');
    }

    vm.reset = function() {
        localStorage.removeItem('dailyDone');
        vm.doneList = new Array(vm.questList.length);
    }

    vm.clean = function(quest, index) {
        quest.done = !quest.done;
        vm.doneList[index] = quest.done;
        localStorage.setItem('dailyDone', angular.toJson(vm.doneList));
    };
  }
})();
