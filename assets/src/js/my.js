$(document).ready(function () { 

  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });

  var owl = $(".js-advantages-owlcarousel");

  owl.owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: true,
      autoplay: false,
      autoHeight: false,
      autoplayTimeout: 5000,
      smartSpeed: 3000,
      animateOut: 'fadeOut',
      margin: 30,
      responsive: {
          0: {
              items: 1, 
          },
          768: { 
              items: 1, 
          },
          1200: { 
              items: 1, 
          }, 
      }
  });

  
});

 



document.addEventListener('DOMContentLoaded', function () {

  const gallery = document.querySelectorAll('.gallery-item');
 
  const elements = [...gallery];

  const list = elements.map((block, index) => block.addEventListener('click', () => {
    const deleteClass = elements.map((block,index) => elements[index].classList.remove('gallery-content') );
  
    elements[index].classList.toggle('gallery-content');
  })); 


});







