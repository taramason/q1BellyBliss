"use strict";
console.log("I'm here!");  // make sure js is connected...

$(document).ready(function(){

  $("img").on("click", function(){  // on click, the images move down to the "shoppingCart"

    console.log("image clicked!");
    var image = $(this).find('img'); //grab the image that was just clicked
    var imageClass = $(this).find("class"); //grab the class
    console.log(imageClass);

    console.log(image);
    console.log($(this).attr('src') );
    var imageSource = $(this).attr('src');  //grab the source image of the image
    $(".shoppingCart").append("<div> <img src=" + imageSource + " class=" + imageClass + "></div>");
    //append the shopping cart div with a new div w the image source

  })
})

localStorage.setItem("ItemChosen", )
