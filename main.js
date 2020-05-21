
 //initialize swiper 1 when document ready
var swiper1 = new Swiper('.swiper-container1', {
  loop:true,
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

 //initialize swiper 2 when document ready
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    cssMode: true,
    pagination: {
        // Optional parameters
        el: '.swiper-pagination',
        dynamicBullets: true,
      }, navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },  
      mousewheel: true,
      keyboard: true,   
  });

  
//initialize swiper 4 when document ready
var swiper4 = new Swiper('.swiper-container4', {
  loop: true,
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//initialize swiper 3 when document ready
var mySwiper3 = new Swiper('.swiper-container3', {
  loop: true,
  pagination: {
  // Optional parameters
  el: '.swiper-pagination',
  dynamicBullets: true,
},navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
speed: 400,
spaceBetween: 20
});