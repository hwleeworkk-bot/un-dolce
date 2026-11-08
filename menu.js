//menu.js

$(document).ready(function(){
	$(".section  .wrap  .menu-list  .column .three  .polaroid").css({"box-shadow":"0px 3px 10px #aaa"});


	imgFrameWidth = $(".img-frame").width();
	$(".img-frame").height(imgFrameWidth);

	$(window).resize(function(){
		
		imgFrameWidth = $(".img-frame").width();
		$(".img-frame").height(imgFrameWidth);
	});

	cnt=0;

	$(".more").click(function(){
		cnt++;
		if (cnt==1)
		{
			$(".section  .wrap  .menu-list  .column .three  .polaroid").animate({"box-shadow":"0px 3px 10px #aaa"});
			$(".three2").slideDown();
		} else if (cnt==2)
		{
			$(".three3").slideDown(300, function(){
				$(".section  .wrap  .menu-list  .column .three  .polaroid").animate({"box-shadow":"0px 3px 10px #aaa"});
				$(".more").text("END");
			});
		} else {
			$(".three2, .three3").fadeOut(300, function(){

				$(".more").text("MORE");
			});
			cnt=0;
		}
	});
		
	
	$(window).on('scroll', function(){
					if( $(window).scrollTop() >= 10 ) {
					  $(".m-header").css({"background":"rgba(255,255,255,1.0)", "box-shadow":"0 1px 5px #aaa"});
					} else {
					  $(".m-header").css({"background":"rgba(255,255,255,0.6)", "box-shadow":"0 0 0 transparent"});
					}

	});//scroll




});//doc