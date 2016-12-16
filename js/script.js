"use strict" ;

$("document").ready(function(){
 console.log("I'm working!");

 $(".one").hover(function(){
   $(this).toggleClass("shadow");
 });

 $(".two").hover(function(){
   $(this).toggleClass("shadow");
 });

});
