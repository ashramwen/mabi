(function() {
  'use strict';

  angular
    .module('mabi')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('dailyquest', {
        url: '/dailyquest',
        templateUrl: 'app/dailyquest/dailyquest.html',
        controller: 'DailyQuestController',
        controllerAs: 'dq'
      })
      .state('note', {
        url: '/note',
        templateUrl: 'app/note/note.html',
        controller: 'NoteController',
        controllerAs: 'Note'
      })
      .state('blacksmith', {
        url: '/blacksmith',
        templateUrl: 'app/blacksmith/blacksmith.html',
        controller: 'BlacksmithController',
        controllerAs: 'bm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
