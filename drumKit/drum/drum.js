angular.
  module('drumApp').
  component('drum', {
    templateUrl: 'drumKit/drum/drum.html',
    controller: function drumController($window,$location) {

      var vm = this;

      this.keys = [
        {key:65, letter:'A', sound:'clap'},
        {key:90, letter:'Z', sound:'tink'},
        {key:69, letter:'E', sound:'kick'},
        {key:82, letter:'R', sound:'openhat'},
        {key:84, letter:'T', sound:'boom'},
        {key:89, letter:'Y', sound:'ride'},
        {key:85, letter:'U', sound:'snare'},
        {key:73, letter:'I', sound:'tom'},
      ]
      
      this.state = {
        keys:$location.hash(),
        sounds:''
      };

      var splitState =  $location.hash().split('');
      for (i=0; splitState[i]; i++){
        var selectKey = this.keys.filter(key => key.letter === splitState[i])[0];
        if (selectKey){
          this.state.sounds += selectKey.sound + ', ';
        }
      }

      this.alertKeyDown = function (key) {
        vm.state.keys += key.letter;
        vm.state.sounds += key.sound + ', ';
        $window.location.href = "http://localhost:1234/#" + vm.state.keys;
      }
    }     
  })
