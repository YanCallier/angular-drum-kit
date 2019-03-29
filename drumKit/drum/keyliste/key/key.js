angular.
module('drumApp')
.component('key', {
    templateUrl: 'drumKit/drum/keyliste/key/key.html',
    bindings:{
        oneKey: '<',
        alertKeyDown: '<',
      },
    controller: function ($timeout, $window) {
      var vm = this;
      this.$onInit = function (){
        
        $window.addEventListener('keydown', function (e) {
          if (e.keyCode === vm.oneKey.key){
            $('.' + vm.oneKey.key).addClass('playing');
            var audio = new Audio('drumKit/sounds/' + vm.oneKey.sound + '.wav');
            audio.currentTime = 0;
            audio.play();
            vm.alertKeyDown(vm.oneKey);
          }            
        });

      };

      $timeout( function () {

        $('.' + vm.oneKey.key).bind( 'transitionend', function() {
          $('.' + vm.oneKey.key).removeClass('playing');
          console.log("youpi");
        });
      });
    }
  }
);