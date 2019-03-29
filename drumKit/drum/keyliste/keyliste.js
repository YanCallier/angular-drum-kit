angular.
module('drumApp')
.component('keyListe', {
    templateUrl: 'drumKit/drum/keyliste/keyliste.html',
    bindings:{
      keysTab: '<',
      keysIn : '@',
      alertKeyDown: '<'
      },
    controller: function () {
      var vm = this;
      this.$onInit = function (){

        this.keysIn = this.keysIn.split('');
        this.keysOut = [];

        for (i=0; this.keysIn[i];i++){

          for (j=0; this.keysTab[j];j++){

            if (this.keysIn[i] === this.keysTab[j].letter){
              this.keysOut[i] = this.keysTab[j];
            }
          }
        } 
      };
    }
  }
);