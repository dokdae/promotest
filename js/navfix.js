$(document).ready(function() {
        var navoffset = $('.navigation').offset();
        $( window ).scroll(function() {
          if ($(document).scrollTop() > navoffset.top) {
            $('.navigation').addClass('fixed');
          }
          else {
            $('.navigation').removeClass('fixed');
          }
        });
      } );