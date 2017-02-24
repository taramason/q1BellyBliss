// "use strict" ;
//
// $("document").ready(function(){
//  console.log("I'm working!");
//
//  $(".optionOne").hover(function(){
//    $(this).toggleClass("shadow");
//  });
//
//  $(".optionTwo").hover(function(){
//    $(this).toggleClass("shadow");
//  });
//
// });
$("document").ready(function(){

  $(document).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('.headerContainer').addClass('shrunk');
    } else {
      $('.headerContainer').removeClass('shrunk');
    }
  });

  $(document).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('.logo').addClass('logoshrunk');
    } else {
      $('.logo').removeClass('logoshrunk');
    }
  });

})
