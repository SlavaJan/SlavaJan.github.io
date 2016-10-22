$(".sidebar__menu_item").mouseenter(function(){
  $(this).animate({width:'240px'}, "fast");
});

$(".sidebar__menu_item").mouseleave(function(){
  $(this).animate({width:'230px'}, "fast");
});


$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    dots: true,
    arrows: false
  });
});


$(".price").mouseenter(function(){
   $(this).animate({width:'100%'}, "fast");
});

$(".price").mouseleave(function(){
 $(this).animate({width:'90%'}, "fast");
});
