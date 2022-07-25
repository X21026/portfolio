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

$(function(){
    var topBtn=$('#page_top');
    topBtn.hide();
      
    //ボタンの表示設定
    $(window).scroll(function(){
      if($(this).scrollTop()>80){
        // 画面を80pxスクロールしたら、ボタンを表示する
        topBtn.fadeIn();
      }else{
        // 画面が80pxより上なら、ボタンを表示しない
        topBtn.fadeOut();
      }
    });
    
    // ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function(){
      $('body,html').animate({
      scrollTop: 0},500);
      return false;
    });
    
    });