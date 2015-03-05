$(document).ready(function() {
    $('.sidebartoggle').click(function(){
    // $(".wrapper").animate({
    //   right: '250px'
     // console.log('helloworld');
     // $(".sidebar").slideIn
    // document.write('hellowodl');
    $(".wrapper").toggleClass('slideinwrapper');
    $(".sidebar").toggleClass('slideinsidebar');
  });


});



