angular.module('drum', ['key','rythme']);

angular.
  module('drum').
  component('drumTest', {
    templateUrl: 'drumKit/drum/drum.html',
    controller: function drumController($timeout,$location) {
      
      this.state = {
        keys:$location.hash(),
        sounds:''
      };

      this.keys = [
        {key:65, letter:'A', sound:'clap'},
        {key:90, letter:'Z', sound:'tink'},
        {key:69, letter:'E', sound:'kick'},
        {key:82, letter:'R', sound:'openhat'},
        {key:84, letter:'T', sound:'boom'},
        {key:89, letter:'Y', sound:'ride'}
      ]

      var splitState =  $location.hash().split('');
      for (i=0; splitState[i]; i++){
        var selectKey = this.keys.filter(key => key.letter === splitState[i])[0];
        if (selectKey){
          this.state.sounds += selectKey.sound + ', ';
        }
      }

      window.addEventListener('keydown', (e) => {
        var selectKey = this.keys.filter(key => key.key === e.keyCode)[0];
          if (selectKey){
            var audio = new Audio('drumKit/sounds/' + selectKey.sound + '.wav');
            audio.currentTime = 0;
            audio.play();
            document.getElementById(e.keyCode).classList.add('playing');
            this.state.keys += selectKey.letter;
            this.state.sounds += selectKey.sound + ', ';
            document.location = "http://localhost:1234/#" + this.state.keys;
          }
      });
    }     
  })
