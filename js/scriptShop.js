"use strict";
console.log("I'm here!");  // make sure js is connected...


  var sourceLocally = localStorage.getItem("imageSource");
  var classLocally = localStorage.getItem("imageClass");

  var imageSource = $(this).attr('src');  //grab the source image of the image
  var imageSource = $(this).attr('src');  //grab the source image of the image
  var itemChosen = $(".shoppingCart").append("<div> <img src=" + sourceLocally + " class=" + classLocally + "></div>");
  var imageClass = $(this).find("class"); //grab the class
  var imageClass2 = $(this).attr("class"); //grab the class

$(document).ready(function(){



  $("img").on("click", function(){  // on click, the images move down to the "shoppingCart"

    var storageBin;

    if ( localStorage.getItem("storageBin") ) {
       storageBin = localStorage.getItem("storageBin");
    } else {
      storageBin = "";
    }


    console.log("image clicked!");

    var imageClass2 = $(this).attr("class"); //grab the class

    var imageSource = $(this).attr('src');  //grab the source image of the image
    // console.log(itemChosen.value);
    //append the shopping cart div with a new div w the image source


    var storageBinArray = storageBin.split(",");
    storageBinArray.push(imageSource);
    localStorage.setItem("storageBin", storageBinArray);




    var sourceLocally = localStorage.getItem("imageSource");
    var classLocally = localStorage.getItem("imageClass");
    console.log(imageSource);
    console.log(imageClass2);
    console.log(sourceLocally);
    console.log(classLocally);

    $(".shoppingCart").empty();
    for (var i = 1; i < storageBinArray.length; i++) {
      $(".shoppingCart").append("<div> <img src=" + storageBinArray[i] + " class='imageOne'></div>");
    }




  })
})

$(".clear").on("click", function() {
  localStorage.clear();
  $(".shoppingCart").empty();
});

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
