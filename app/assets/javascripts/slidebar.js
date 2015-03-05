$(document).ready(function() {
  $('.sidebartoggle').click(function(){
    $(".wrapper").toggleClass('slideinwrapper');
    $(".sidebar").toggleClass('slideinsidebar');
    return false;
  });

  $(".wrapper").click(function(){
    $(".wrapper").removeClass('slideinwrapper');
    $(".sidebar").removeClass('slideinsidebar');
  });

});
