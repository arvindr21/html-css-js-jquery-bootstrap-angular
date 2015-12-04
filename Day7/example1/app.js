$(document).ready(function () {
	var cnt = 0;
	$("#myBtn").click(function(){
		if(cnt % 2) {
			$("p").show(); this.value = "Hide";
		} else {
			$("p").hide(); this.value = "Show";
		}
		cnt++;
		console.log(this.value);
	});
});