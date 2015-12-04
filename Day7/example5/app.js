$(document).ready(function() {
    // $('[data-tooltip]').mouseenter(handleIn).mouseleave(handleOut).mousemove(moveIt);
    $tooltip = "<p class='tooltip'></p>"
    $('[data-tooltip]').hover(handleIn, handleOut).mousemove(moveIt);

    function handleIn() {
        $("body").append($tooltip);
        $(".tooltip").text($(this).data("tooltip"))
            	  	 .fadeIn();
    }

    function handleOut(event) {
        $(".tooltip").fadeOut().remove();
    }

    function moveIt(event) {
        // console.log("x", event.clientX, "y", event.clientY);
        $(".tooltip").css({
            "left": event.clientX,
            "top": event.clientY
        });
    }
});
