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
    nav:true,
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

    jQuery(function () {
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 80) {
                $(".menu-background").css('background-color', 'rgba(0, 0, 0, 0.8)');
                $(".brand-logo").css('opacity', '1');
            } else {
                $(".menu-background").css('background-color', 'transparent');
                $(".brand-logo").css('opacity', '0');
            };

            if (jQuery(this).scrollTop() > 30) {

                $(".nav-wrapper").css('margin-top', '0px');
            } else {

                $(".nav-wrapper").css('margin-top', '10px');
            }
        });
    });

})