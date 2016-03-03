//Jeanne Locker
//SoftDev2 pd3
//HW1b -- Finding Your Path Around the Canvas
//2016-02-11

var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");


//sets color (style?) of the "fill
ctx.fillStyle = "#99ff99";
//draws a rectangle that is the same color as set with fillStyle
ctx.fillRect (0,0,538,538);
//sets color (style?) of strokes (line stuff)
ctx.strokeStyle="#ff0000";

//starts a path?
ctx.beginPath();
//makes path of a line from last point
ctx.lineTo(0,0);
ctx.lineTo(538,538);
//move to the next point without drawing a line
ctx.moveTo(538,0);
ctx.lineTo(538,0);
ctx.lineTo(0,538);
//draws all the strokes that were specified
ctx.stroke();

//makes the path of an arc!
ctx.arc(100,200,300,400,500);
ctx.stroke();
ctx.fillStyle="#ff0000"; 
//fills the current area
ctx.fill()

ctx.fillStyle="#000000";
ctx.font = "30px Arial";
ctx.fillText("I'm up here!", 10,50);
ctx.fillStyle="#000000";
ctx.font = "30px Arial";
ctx.fillText("I'm down here!", 330,500);
ctx.moveTo(400,300);
//makes outline of rectangle (with strokes!)
ctx.strokeRect(400,300,420,330);
ctx.stroke()
ctx.closepath();

