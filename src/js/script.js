$(document).ready(()=>{
    $('.nft-arts__slider').slick({

        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"> <img src="img/arrow_l.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_r.png"></button>'
    });
  })
  $(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});