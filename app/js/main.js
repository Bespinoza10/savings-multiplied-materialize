(function(){
  'use strict';

  $.get( 'https://savingsmultipliedssh.firebaseio.com/items.json', function( data ) {
      _.forEach(data, function(item){
        var item = $('<div class="col S3 productGrid"><div class = "image">' + '<img src =' + item.image + '>' + '</div><p class= "item-title"> $' + item.price + '</p><p class= "item-title">' + item.title + '</p><p class= "item-title">' + moment(item.endDate).fromNow() + '</p></div>');
        $( '#product-grid' ).append( item );

      });
    });


}());
