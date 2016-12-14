"use strict";
console.log("I'm here!");  // make sure js is connected...


  var sourceLocally = localStorage.getItem("imageSource");
  var classLocally = localStorage.getItem("imageClass");
  console.log(imageSource);
  console.log(imageClass2);
  console.log(sourceLocally);
  console.log(classLocally);
  var imageSource = $(this).attr('src');  //grab the source image of the image
  var imageSource = $(this).attr('src');  //grab the source image of the image
  var itemChosen = $(".shoppingCart").append("<div> <img src=" + sourceLocally + " class=" + classLocally + "></div>");
  var imageClass = $(this).find("class"); //grab the class
  var imageClass2 = $(this).attr("class"); //grab the class

$(document).ready(function(){


  $("img").on("click", function(){  // on click, the images move down to the "shoppingCart"

    console.log("image clicked!");
    var image = $(this).find('img'); //grab the image that was just clicked
    var imageClass = $(this).find("class"); //grab the class
    // console.log(imageClass);

    var imageClass2 = $(this).attr("class"); //grab the class
    // console.log("imageClass2", imageClass2);

    // console.log(image);
    // console.log($(this).attr('src') );
    var imageSource = $(this).attr('src');  //grab the source image of the image
    // console.log(itemChosen.value);
    //append the shopping cart div with a new div w the image source
    localStorage.setItem("imageSource", imageSource);
    localStorage.setItem("imageClass", imageClass2);
    var sourceLocally = localStorage.getItem("imageSource");
    var classLocally = localStorage.getItem("imageClass");
    console.log(imageSource);
    console.log(imageClass2);
    console.log(sourceLocally);
    console.log(classLocally);

    var itemChosen = $(".shoppingCart").append("<div> <img src=" + sourceLocally + " class=" + classLocally + "></div>");



  })
})

//
// JSON.parse() methods:
// var car = {};
// car.wheels = 4;
// car.doors = 2;
// car.sound = 'vroom';
// car.name = 'Lightning McQueen';
// console.log( car );
// localStorage.setItem( 'car', JSON.stringify(car) );
// console.log( JSON.parse( localStorage.getItem( 'car' ) ) );
