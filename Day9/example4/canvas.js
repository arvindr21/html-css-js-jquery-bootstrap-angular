function drawLine() {
    var canvas = document.getElementById("myCanvas1");
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(450, 50);
    context.lineWidth = 5;
    context.strokeStyle = "#505";
    context.lineCap = "round"; //Squre, butt
    context.stroke();

    context.beginPath();
    context.moveTo(200, canvas.height / 7);
    context.lineTo(canvas.width / 8, canvas.height);
    context.lineWidth = 5;
    context.strokeStyle = "#550";
    context.stroke();
}

function drawArc() {
    var canvas = document.getElementById("myCanvas2");
    var context = canvas.getContext('2d');

    var cx = canvas.width / 2,
        cy = canvas.height / 2,
        cr = 90,
        startAngle = 0,//1.1 * Math.PI
        endAngle = 0.5 * Math.PI, //1.9 * Math.PI
        counterClockwise = false;

    context.beginPath();
    context.strokeStyle = "#055";
    context.fillStyle = "#055";
    context.lineWidth = 9;
    context.arc(cx,cy,cr,startAngle,endAngle,counterClockwise);
    context.stroke();
    //context.fill();

    context.beginPath();
    context.stroke();
    
}
window.onload = function() {
    drawLine();
    drawArc();
};
