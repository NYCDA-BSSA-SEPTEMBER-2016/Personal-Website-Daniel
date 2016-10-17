console.log("hello fellow developer!")


$(document).ready(
	function(){
		$("#homecontent img").hide().fadeIn(5500)
		$("#homebutton").click(function(){
			$("#homecontent").animatescroll({scrollSpeed:2000})
		})
		$("#aboutbutton").click(function(){
			$("#aboutcontent").animatescroll({scrollSpeed:2000})
		})
		$("#portfoliobutton").click(function(){
			$("#portfoliocontent").animatescroll({scrollSpeed:2000})
		})
		$("#contactbutton").click(function(){
			$('#contactcontent').animatescroll({scrollSpeed:2000});
		})
	} );

