//un-dolce-temp.js

$(document).ready(function(){
	sw=0;

	$(".d-drawer-btn").click(function(){
		if (sw==0)
		{
			$(".d-nav-store").slideDown();
			$(".ddb-left  span:nth-child(1)").css({"width":"0"})
			$(".ddb-left  span:nth-child(2)").css({"width":"100%","transform":"rotate(30deg)"})
			$(".ddb-left  span:nth-child(3)").css({"transform":"rotate(30deg)"})
			$(".ddb-right  span:nth-child(1)").css({"width":"0"})
			$(".ddb-right  span:nth-child(2)").css({"width":"100%", "transform":"rotate(-30deg)"})
			$(".ddb-right  span:nth-child(3)").css({"transform":"rotate(-30deg)"})
			sw=1;
		} else if (sw==1)
		{
			$(".d-nav-store").slideUp();
			$(".ddb-left  span:nth-child(1)").css({"width":"100%"})
			$(".ddb-left  span:nth-child(2)").css({"width":"70%", "transform":"rotate(0deg)"})
			$(".ddb-left  span:nth-child(3)").css({"transform":"rotate(0deg)"})
			$(".ddb-right  span:nth-child(1)").css({"width":"100%"})
			$(".ddb-right  span:nth-child(2)").css({"width":"70%", "transform":"rotate(0deg)"})
			$(".ddb-right  span:nth-child(3)").css({"transform":"rotate(0deg)"})
			sw=0;
		}

	})


	function closeNav() {
	  $("#myNav").css({"width":"0"})
	}


	$(".m-drawer-btn").click(function(){
	
		$("#myNav").fadeIn(100, function(){
			$(".overlay-half").css({"width":"50%"})
		});
		$("html, body").css({"overflow":"hidden"})
	})

	$(".closebtn , .downbtn  , .close-half").click(function(){
		
		
		$(".overlay-half").css({"width":"0"});
		$("#myNav").fadeOut(500);
		$("html, body").css({"overflow":"visible"})
	})



	
		// .top_button 나타나기
				if($(window).width() >481) { /* do something */ 
				  var page = $("body");
				  var pageOffsetTop = page.offset().top;
				  
				$(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
					pageOffsetTop = page.offset().top;
				  });

				 w= $(window).scrollTop()
				  
				  $(window).on('scroll', function(){
					if( $(window).scrollTop() >= 10 ) {
					  $(".top-btn").fadeIn();
					} else {
					  $(".top-btn").fadeOut();
					}
				 });//if문

				  console.log(pageOffsetTop, w)
				} 


		// .top_button 누르면 스무스하게 올라가기
			$(".top-btn").click(function(event){
				event.preventDefault();
				
				$("html, body").animate({
					scrollTop: 0
				}, 400);
			});

			



});//doc