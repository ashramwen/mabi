(function() {
    'use strict';

    angular
        .module('mabi')
        .controller('PuzzleController', PuzzleController);

    /** @ngInject */
    function PuzzleController(puzzle) {
        var vm = this;
        vm.puzzleList = puzzle;
    }
})();
