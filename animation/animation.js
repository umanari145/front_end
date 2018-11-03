$(function(){


  $('.toggle_menu').click(function(){
		$(this).parent('.toggle_wrapper').toggleClass('active');
	})

	changingSize();

	function changingSize(){
		$('#animating').delay(1000).animate({
			'width':'100px'
		},5000,function(){
			$(this).css('width','10px');
			changingSize();
		});
	}

	$(window).scroll(function(){
		//画像の絶対的な位置
		var imgPos = $('.detect_button').offset().top;
		//スクロール量
		var scrollRyou = $(window).scrollTop();
		if (scrollRyou > imgPos -500) {
			$('.detect_scroll_button_inner').css({
				'width':'100px'
			});
		} else {
			$('.detect_scroll_button_inner').css({
				'width':'0'
			});
		}
	});

});
