//Jeanne Locker
//SoftDev2 pd3
//HW2b -- Dot, Dot, Dot
//2016-02-12

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var b = document.getElementById("clear");
ctx.beginPath();

//makes circles, draws lines!
var draw = function draw(){
    //makes ball red - otherwise, erase will default it to black
    ctx.fillStyle="#ff0000"
    var e = window.event;
    var x = e.offsetX;
    var y = e.offsetY;
    
    ctx.lineTo(x,y);
    ctx.moveTo(x,y);
    ctx.stroke();
    
    ctx.arc(x, y, 15, 0, 6.28)
    ctx.moveTo(x,y);
    ctx.fill();
}

//clears canvas
var erase = function(e){
    e.preventDefault();
    //ctx.clearRect(0,0,538,538);
    //this is incorrect!
    c.width = c.width;
}

c.addEventListener("click", draw);
b.addEventListener("click", erase);
