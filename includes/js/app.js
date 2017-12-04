$( document ).ready(function(){

  $('.parallax').parallax();

  $(".button-collapse").sideNav();

  $(document).ready(function(){
    $('.scrollspy').scrollSpy({
      scrollOffset: 65
    });
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:4
      }
    }
  })

  $('.scroll-pane')
  .jScrollPane({
    showArrows: true,
    verticalGutter: 10
  })
  .bind(
      'mousewheel',
      function(e)
      {
          e.preventDefault();
      }
  );

})
