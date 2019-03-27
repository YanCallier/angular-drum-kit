angular.module('key',[]);

angular.
module('key', [])
.component('keyList', {
        templateUrl: 'drumKit/drum/key/key.html',
        bindings:{
            oneKey: '<'
          },
        controller: function rythmeController($timeout) {
            $timeout(function() {
                var htmlKeys  = document.querySelectorAll('.key');
                htmlKeys.forEach(key => key.addEventListener('transitionend', (e) => {
                  key.classList.remove('playing');
                }));
            })
        }
    },
);