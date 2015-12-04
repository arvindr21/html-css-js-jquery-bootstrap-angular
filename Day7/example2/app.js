$(document).ready(function () {
	$("div").animate({
		width: "100px",
		height: "100px",
		backgroundColor: "red",
		borderRadius: "50px",
		transform: "rotate(10deg)"
	}, 5000, function(){
		console.log("Animation complete");
		$(this).animate({
			width: "20px",
			height: "20px",
			"backgroundColor": "green",
			borderRadius: "0px",
			"transform": "rotate(0deg)"
		}, 5000, function(){
			console.log("Back to initial");
		});
	});
});