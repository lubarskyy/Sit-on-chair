document.addEventListener("DOMContentLoaded", function(){

  /* simple script removing product description while hovering over the image */
  var image = Array.from(document.querySelectorAll(".product-showcase-image"));
  var description = Array.from(document.querySelectorAll(".product-showcase-name"));

  image[0].addEventListener("mouseenter", function(event){
    description[0].classList.toggle("hidden");
  });
  image[0].addEventListener("mouseleave", function(event){
    description[0].classList.toggle("hidden");
  });
  image[1].addEventListener("mouseenter", function(event){
    description[1].classList.toggle("hidden");
  });
  image[1].addEventListener("mouseleave", function(event){
    description[1].classList.toggle("hidden");
  });

  /* rolldown menu on hover */
  var menuElement = Array.from(document.querySelectorAll(".navigation > li"));
  var menuElementToRoll = Array.from(document.querySelectorAll(".rolldown"));

  menuElement[0].addEventListener("mouseover", function(event){
    menuElementToRoll[0].style.display = "block";
  });
  menuElement[0].addEventListener("mouseout", function(event){
    menuElementToRoll[0].style.display = "none";
  });
  menuElement[1].addEventListener("mouseover", function(event){
    menuElementToRoll[1].style.display = "block";
  });
  menuElement[1].addEventListener("mouseout", function(event){
    menuElementToRoll[1].style.display = "none";
  });
  menuElement[2].addEventListener("mouseover", function(event){
    menuElementToRoll[2].style.display = "block";
  });
  menuElement[2].addEventListener("mouseout", function(event){
    menuElementToRoll[2].style.display = "none";
  });

  /* slider */
  var buttonPrev = document.querySelector(".product-slider-left");
  var buttonNext = document.querySelector(".product-slider-right");
  var lis = Array.from(document.querySelectorAll('.slider li'));
  var counter = 0;

  lis[0].classList.add('visible');

  buttonNext.addEventListener('click', function(event){

    lis[counter].classList.remove('visible');
    counter++;
    if(counter >= lis.length){
      counter = 0;
    };
    lis[counter].classList.add('visible');
  });

  buttonPrev.addEventListener('click', function(event){

    lis[counter].classList.remove('visible');
    counter--;
    if(counter < 0){
      counter = lis.length-1;
    };
    lis[counter].classList.add('visible');
  });

});
