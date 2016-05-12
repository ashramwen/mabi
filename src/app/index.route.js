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
      .state('animaltraining', {
        url: '/animaltraining',
        templateUrl: 'app/animaltraining/animaltraining.html',
        controller: 'AnimalTrainingController',
        controllerAs: 'at'
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
      })
      .state('puzzle', {
        url: '/puzzle',
        templateUrl: 'app/puzzle/puzzle.html',
        controller: 'PuzzleController',
        controllerAs: 'pz'
      })
      .state('notify', {
        url: '/notify',
        templateUrl: 'app/notify/notify.html',
        controller: 'NotifyController',
        controllerAs: 'notify'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
