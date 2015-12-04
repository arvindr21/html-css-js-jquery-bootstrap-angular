$(document).ready(function() {
	// All these give the same result
	//var menu = $("nav > ul > li").siblings();
	//var menu = $("nav ul li:visible").siblings();
	var menu = $("nav ul").find("li:visible");
	
	$(menu).click(function(){
		// $(this.children).css("display", "table");
		if($(this).children('ul').hasClass("active")) {
			return;
		}
		$('.active').slideUp().removeClass('active');
		$(this).children('ul').addClass("active").slideDown();

	});
	// Id active does not have any style, then change the background color to ul from nav
	// $(menu).mouseleave(function(){
	// 	$(this.children).css("display", "none");
	// });
});
