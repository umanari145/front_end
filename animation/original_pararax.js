$(function(){

	dispImage();

	$(window).scroll(function(){
		dispImage();
	});

	function dispImage()
	{
		$('.image_block').each(function(){
			var scrollRyou = $(window).scrollTop();
			var imgPos = $(this).offset().top;
			if (scrollRyou > imgPos * 0.4) {
				$(this).css({
					'transform':'none',
					'opacity':'1'
				});
			} else {
				$(this).css({
					'transform':'translateY(50px)',
					'opacity':'0'
				});
			}
		});

	}
});
