var character = 200;
$(document).ready(function(){
    
       $("#question").on('input',function(){
           var x = $("#question").val().length;
           $("#character").text ( "" + (character-x));
           //this.innerHTML = "" + character -x;
       });


})
