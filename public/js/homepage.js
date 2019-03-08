// $('button') .click(function (){
//     $('#cacher') .css('display', 'none');
//     $('#afficher') .css('display', 'block');
//     $('.zebre') .hide(3000);
// });

    $(function() {
      $('#afficher').attr('disabled','disabled');
      $('#afficher').click(function(){
        $('#afficher').attr('disabled','disabled');
        $('#cacher').removeAttr('disabled');
        $('#zebre').show(3000);
      });
      $('#cacher').click(function(){
        $('#cacher').attr('disabled','disabled');
        $('#afficher').removeAttr('disabled');
        $('#zebre').hide(3000);
      });
    });