//store.js


$(document).ready(function(){

	$(window).on('scroll', function(){
					if( $(window).scrollTop() >= 10 ) {
					  $(".m-header").css({"background":"rgba(255,255,255,1.0)", "box-shadow":"0 1px 5px #aaa"});
					} else {
					  $(".m-header").css({"background":"rgba(255,255,255,0.6)", "box-shadow":"0 0 0 transparent"});
					}

	});//scroll


	itTop = $(".section .store-area .store .store-it").offset().top - 80;
	krTop = $(".section .store-area .store .store-kr").offset().top - 80;
	
	$(".section .map-area .map .pin-it").click(function(){
		

		$("html, body").animate({
			
			scrollTop: itTop
				
			}, 400)
	
	})

		
	$(".section .map-area .map .pin-kr").click(function(){
		

		$("html, body").animate({
			
			scrollTop: krTop
				
			}, 400)
	
	})

});//doc