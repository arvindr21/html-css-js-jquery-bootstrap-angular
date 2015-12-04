// $(document).ready(function() {

//     function addDblClick() {
//         $("label").dblclick(function() {
//             var inputLabel = "<input type='text' value='" + $(this).html() + "'/>";
//             var parent = $(this).parent();
//             $(this).remove();
//             parent.append(inputLabel);
//             addFousOut();
//         });
//     }

//     function addFousOut() {
//         $("input").blur(function() {
//             var parent = $(this).parent();
//             var label = "<label>" + this.value + "</label>";
//             $(this).remove();
//             parent.append(label);
//             addDblClick();
//         });
//     }
//     addDblClick();
// });

$(document).ready(function(){
	$("label").on('dblclick', function(e){
		$(this).hide();
		$("input").val($(this).text())
				   .show()
				   .one('blur', function(e){
				   		$('label').text($(this).val()).show();
				   		$(this).hide();
				   });
	});
});