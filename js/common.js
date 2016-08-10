$(document).ready(function() {
	
// Смена класса Active по нажатию
	$('.shop-window, .item-det-shop-window').on('click', '.shop-window-item, .item-det-shop-window-item', function() {
		$('.shop-window-item, .item-det-shop-window-item').removeClass('active');
		$(this).addClass('active');
	});
	
	$('.categories').on('click', '.category', function() {
		$('.category').removeClass('active');
		$(this).addClass('active');
	});

		$('#accordion').on('click', 'li', function() {
		$('li').removeClass('active');
		$(this).addClass('active');
	});

// Запускаем слайдер JQueryUI
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 60000,
      values: [ 6000, 40000 ],
	  step: 500,
      slide: function( event, ui ) {
        $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
  } );

// Запускаем аккордеон в боковом меню
$( "#accordion" ).accordion({
  active: 1,
  collapsible: true
});

	
// Запускаем модальные окна
$(".fancybox").fancybox();

	
// Предотвращаем ввод нецифровых символов в input type="tel"
document.querySelector("input[type=tel]").addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});


// Запускаем табы by Dimox

$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.dtabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});



});