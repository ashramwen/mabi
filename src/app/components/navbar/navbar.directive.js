(function() {
  'use strict';

  angular
    .module('mabi')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;

      vm.ducks = [{
          link: 'home',
          text: '貿易計算雞'
      },{
          link: 'dailyquest',
          text: '每日任務'
      },{
          link: 'note',
          text: '筆記'
      },{
          link: 'blacksmith',
          text: '魔女面具'
      }];

      vm.links = [{
          url: 'http://mabinogi.fws.tw/',
          target: '_blank',
          text: 'Mabinogi奇幻世界'
      }, {
          url: 'http://ogc.bowsunfan.la/mabinogi/trainee_knight.html',
          target: '_blank',
          text: '騎士好感'
      }, {
          url: 'http://forum.gamer.com.tw/G2.php?bsn=07422&&sn=15164',
          target: '_blank',
          text: '騎士好感(戴伊、艾樂莉絲)'
      }, {
          url: 'http://forum.gamer.com.tw/G2.php?bsn=07422&sn=15163',
          target: '_blank',
          text: '騎士好感(艾希、寇爾)'
      }, {
          url: 'http://forum.gamer.com.tw/Co.php?bsn=07422&sn=1668493',
          target: '_blank',
          text: '每日活動(1)'
      }, {
          url: 'http://forum.gamer.com.tw/C.php?bsn=07422&snA=224471',
          target: '_blank',
          text: '每日活動(2)'
      }, {
          url: 'https://docs.google.com/a/inventalk.com.tw/spreadsheet/ccc?key=0AmYaqEn_Pcx6dFVoSm12UWRuLVc3dVY5XzdrZWxObVE&usp=sharing#gid=0',
          target: '_blank',
          text: '背包整理'
      }, {
          url: 'http://global.erinn.biz/shopboard.php?altsv=mabitw4',
          target: '_blank',
          text: '房屋看板'
      }, {
          url: 'http://weather.erinn.biz/smuggler.php',
          target: '_blank',
          text: '走私販情報'
      }, {
          url: 'https://docs.google.com/spreadsheets/d/1yTteVz2gJipzb5xF8Gh-3Xg-lWemqE5HnGXBMamnP4Q/edit#gid=0',
          target: '_blank',
          text: '土土料理手冊'
      }, {
          url: 'http://mabicat.dousetsu.com/index.htm',
          target: '_blank',
          text: '路邊貓窩'
      }, {
          url: 'http://tw.beanfun.com/mabinogi/index.aspx',
          target: '_blank',
          text: '瑪奇官網'
      }];
    }
  }

})();
