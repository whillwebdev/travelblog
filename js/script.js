$(document).ready(function(){
  var startDiv = $('.slider-inner div:first-child')
  var lastDiv = $('.slider-inner div:last-child')
  var currentDiv = startDiv;
  var count = 1;
  var totalDivs = $('.slider-inner > div').length;

  $('.next').on('click', function(){
    if (count == totalDivs) {
      currentDiv.hide()
      currentDiv = startDiv.show()
      count = 1
    } else {
      currentDiv.hide()
      currentDiv = currentDiv.next().show()
      count ++
    }
  });

  $('.prev').on('click', function() {
    if (count == 1) {
      currentDiv.hide()
      currentDiv = lastDiv.show()
      count = totalDivs
    } else {
      currentDiv.hide()
      currentDiv = currentDiv.prev().show();
      count--
    }
  });
});
  // $('.next').on('click', function(){
  //   var currentImg = $('.active');
  //   var nextImg = currentImg.next();
  //
  //   if(nextImg.length){
  //     currentImg.removeClass('active').hide();
  //     // nextImg.addClass('active').show();
  //     currentImg.next().addClass('.active').show();
  //   } else {
  //     currentImg.removeClass('active').hide();
  //     // nextImg.addClass('active').show();
  //     currentImg.first().addClass('.active').show();
  //   }
  // });
  //
  // $('.prev').on('click', function(){
  //   var currentImg = $('.active');
  //   var prevImg = currentImg.prev();
  //
  //   if(prevImg.length){
  //     currentImg.removeClass('active').hide();
  //     prevImg.addClass('active').show();
  //   }
  // });
  // $('.next').on('click', function(){
  //   var currentImg = $('.active');
  //   var nextImg = currentImg.next();
  //
  //   if (currentImg.next == null) {
  //     currentImg.removeClass('active').hide();
  //     $('.slider-inner:first-child').addClass('active').show();
  //   }
  // });


var slider = $('.slider-inner');
var currentImg = $('.active');

// next
//  currentImg.removeClass('.active').hide();
//  currentImg.nextSibling.addClass('.active').show();

// prev
//  currentImg.removeClass('.active').hide();
//  currentImg.previousSibling.addClass('.active').show();






// $('.flexslider').flexslider({
//   animation: "slide"
//   animationLoop: "false"
//   itemWidth: 210,
//   itemMargin: 5
// });
