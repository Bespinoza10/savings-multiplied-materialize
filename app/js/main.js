(function(){
  'use strict';

  $.get( 'https://savingsmultipliedssh.firebaseio.com/items.json', function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});

  $( document ).ready(function() {
    console.log( "ready!" );
  });


}());
