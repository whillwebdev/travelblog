$(document).ready(function(){
  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active').hide();
      nextImg.addClass('active').show();
    }
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').hide();
      prevImg.addClass('active').show();
    }
  });
  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if (currentImg.next == null) {
      currentImg.removeClass('active').hide();
      $('.slider-inner:first-child').addClass('active').show();
    }
  });
});






// $('.flexslider').flexslider({
//   animation: "slide"
//   animationLoop: "false"
//   itemWidth: 210,
//   itemMargin: 5
// });
