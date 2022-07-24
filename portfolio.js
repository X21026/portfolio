function fadeAnime(){
    $('.fadeUpTrigger').each(function(){
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');
      }else{
      $(this).removeClass('fadeUp');
      }
      });
  }
  
  
$(window).scroll(function (){
    fadeAnime();
});
  
  
$(window).on('load', function(){
    fadeAnime();
});

$(function() {
    $('.menu-content a').on('click', function(event) {
        $('#menu-btn-check').prop('checked', false);
    });
});