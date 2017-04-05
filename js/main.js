document.addEventListener("DOMContentLoaded", function(){

  /* Simple script removing product description while hovering over the image */
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

  /* Header menu drop down on hover */
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

  /* Slider script for highlight product section */
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

  /* */
  var listArrow = Array.from(document.querySelectorAll('.list_arrow'));
  var listPanelToShow = Array.from(document.querySelectorAll('.list_panel'));
  var listElement = Array.from(document.querySelectorAll('.list_panel li'));
  var listLabel = Array.from(document.querySelectorAll('.list_label'));
  var title = document.querySelector('.title');
  var titleValue = document.querySelector('.title.value');
  var color = document.querySelector('.color');
  var colorValue = document.querySelector('.color.value');
  var pattern = document.querySelector('.pattern');
  var patternValue = document.querySelector('.pattern.value');
  var transport = document.querySelector('.transport');
  var transportValue = document.querySelector('.transport.value');
  var transportLabel = document.querySelector('label[for=transport]');
  var transportCheckbox = document.querySelector('#transport');
  var image = document.querySelector('.image_part img');
  var sumValue = document.querySelector('.sum strong');
  var result1 = 0;
  var result2 = 0;
  var result3 = 0;
  var result4 = 0;

  listArrow[0].addEventListener('click', function(event){
    if(listPanelToShow[0].style.display == ""){
      listPanelToShow[0].style.display = "block";
    } else {
      listPanelToShow[0].style.display = "";
    }
  });

  listArrow[1].addEventListener('click', function(event){
    if(listPanelToShow[1].style.display == ""){
      listPanelToShow[1].style.display = "block";
    } else {
      listPanelToShow[1].style.display = "";
    }
  });

  listArrow[2].addEventListener('click', function(event){
    if(listPanelToShow[2].style.display == ""){
      listPanelToShow[2].style.display = "block";
    } else {
      listPanelToShow[2].style.display = "";
    }
  });

  Array.from(listPanelToShow[0].children).forEach(function(el){
    el.addEventListener('click', function(event){
      title.innerText = el.innerText;
      listLabel[0].innerText = el.innerText;
      titleValue.innerText = el.dataset.price;
      result1 = parseFloat(el.dataset.price);
      sumValue.innerText = result1 + result2 + result3 + result4 + " zł";
    });
  });

  Array.from(listPanelToShow[1].children).forEach(function(el){
    el.addEventListener('click', function(event){
      color.innerText = el.innerText
      listLabel[1].innerText = el.innerText;
      colorValue.innerText = el.dataset.price;
      if(color.innerText == "Czarny") {
        image.setAttribute('src', 'images/black_chair.png')
      } else if (color.innerText == "Pomarańczowy") {
        image.setAttribute('src', 'images/orange_chair.png')
      } else {
        image.setAttribute('src', 'images/red_chair.png')
      };
      result2 = parseFloat(el.dataset.price);
      sumValue.innerText = result1 + result2 + result3 + result4 + " zł";
    });
  });

  Array.from(listPanelToShow[2].children).forEach(function(el){
    el.addEventListener('click', function(event){
      pattern.innerText = el.innerText
      listLabel[2].innerText = el.innerText;
      patternValue.innerText = el.dataset.price;
      result3 = parseFloat(el.dataset.price);
      sumValue.innerText = result1 + result2 + result3 + result4 + " zł";
    });
  });
  transportCheckbox.addEventListener('click', function(event){
    if(transportCheckbox.checked == true){
      transport.innerText = transportLabel.innerText;
      transportValue.innerText = transportCheckbox.dataset.transportPrice;
      result4 += parseFloat(transportCheckbox.dataset.transportPrice);
    } else {
      transport.innerText = "";
      transportValue.innerText = "";
      result4 -= parseFloat(transportCheckbox.dataset.transportPrice);
    }
    sumValue.innerText = result1 + result2 + result3 + result4 + " zł";
  });


});
