angular.module('rythme',[]);

angular.
module('rythme', [])
.component('rythmeTest', {
        templateUrl: 'drumKit/drum/rythme/rythme.html',
        bindings:{
            sounds: '<'
          },
        controller: function rythmeController($location) {
            this.$onChanges= function (){
                this.soundsTable =  this.sounds.split(',')
                this.player = function (){
                    var count=0;
                    for (let sound of this.soundsTable ) {
                        sound = sound.trim();
    
                        setTimeout(function (){
                            if (sound != ""){
                                var audio = new Audio('drumKit/sounds/' + sound + '.wav');
                                audio.play();
                            }
                        },count*200);
                        count +=1;
                    }   
                }
            }
        }
    },
);