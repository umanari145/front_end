$(function(){

	dispImage();

	$(window).scroll(function(){
		dispImage();
	});

	function dispImage()
	{
		$('.image_block').each(function(){
			var scrollRyou = $(window).scrollTop();
			console.log("scroll " + scrollRyou);
			var imgPos = $(this).offset().top;
			console.log("imagePos " + imgPos);
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
