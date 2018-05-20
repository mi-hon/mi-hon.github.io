$(function() {
  //各コンテンツへのアニメーションリンク
  $("header a").click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html body').animate({
      'scrollTop': position
    }, 500,);
  });
  // Aboutのアコーディオン
  $('.about-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  });
  //  Worksのアコーディオン
  $(document).ready(function() {
    $('.container-1').click(function() {
      $('.inner-1').slideToggle(800);
      $('.inner-1').toggleClass('anime');
      $('.inner-1').toggleClass('anime-reverse');
      $('.ttl-1').slideToggle(800);
      $('.ttl-1').toggleClass('anime');
      $('.ttl-1').toggleClass('anime-reverse');
    });
    $('.container-2').click(function() {
      $('.inner-2').slideToggle(800);
      $('.inner-2').toggleClass('anime');
      $('.inner-2').toggleClass('anime-reverse');
      $('.ttl-2').slideToggle(800);
      $('.ttl-2').toggleClass('anime');
      $('.ttl-2').toggleClass('anime-reverse');
    });
    $('.container-3').click(function() {
      $('.inner-3').slideToggle(800);
      $('.inner-3').toggleClass('anime');
      $('.inner-3').toggleClass('anime-reverse');
      $('.ttl-3').slideToggle(800);
      $('.ttl-3').toggleClass('anime');
      $('.ttl-3').toggleClass('anime-reverse');
    });
  });
});
