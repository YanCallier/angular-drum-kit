angular.
module('drumApp')
.component('key', {
    templateUrl: 'drumKit/drum/key/key.html',
    bindings:{
        oneKey: '<',
        alertKeyDown: '<',
      },
    controller: function ($timeout, $window) {
      var vm = this;
      this.$onInit = function (){
        
        // $window.addEventListener('keydown', function (e) {
        //   if (e.keyCode === vm.oneKey.key){
        //     $('#' + vm.oneKey.key).addClass('playing');
        //     var audio = new Audio('drumKit/sounds/' + vm.oneKey.sound + '.wav');
        //     audio.currentTime = 0;
        //     audio.play();
        //     vm.alertKeyDown(vm.oneKey);
        //   }            
        // });
      };

      // $timeout( function () {
      //   var key = document.getElementById(vm.oneKey.key);
      //   key.addEventListener('transitionend', function () {
      //     console.log('test');
      //     key.classList.remove('playing');
      //   });
      // });
    }
  }
);