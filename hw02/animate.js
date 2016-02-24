//Jeanne Locker
//SoftDev2 pd3
//HW2
//2016-02-23

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var cl = document.getElementById("clear");

var growing = true;
var radius = 0;
var startDraw = document.getElementById("start");
var endDraw = document.getElementById("stop");

var tbt = document.getElementById("dvd");
var logo = new Image();
logo.src="logo_dvd.jpg";

var dx = 214;
var dy = 239;

var down = true;
var right = true;

var tid;
var did;

function drawDot() {
    ctx.fillStyle="#ff0000";
    ctx.clearRect(0,0,c.width,c.height);
    ctx.strokeRect(0,0,c.width,c.height);

    if (growing == true) {
	radius = radius + 1;
    }
    else {
	radius = radius-1;
    }

    if (radius >= (c.width/2)) {
	growing=false;
    }
    if (radius <= 0) {
	growing=true;
    }
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

    tid = window.requestAnimationFrame(drawDot);
};

//function stop() {
    //ctx.clearRect(0,0,c.width,c.height);
    //growing = false;
    //radius = 0;
  //  window.cancelAnimationFrame(window.requestAnimationFrame( animate ) );
//};

function bounce(){
    ctx.clearRect(0,0,538,538);
    if (dy <=0)
	down = true;
    else if (dy >= 488)
	down = false;

    if (dx <=0)
	right = true;
    else if (dx >= 438)
	right = false;
    
    if (down)
	dy += Math.random() + 1;
    else
	dy -= Math.random() + 1;

    if (right)
	dx += Math.random() + 1;
    else
	dx -= Math.random() + 1;

    ctx.beginPath();
    ctx.drawImage(logo, dx, dy, 100, 50)
    did = window.requestAnimationFrame(bounce);

}

//var requestID = window.requestAnimationFrame(drawDot);

function stop(e){
    e.preventDefault();
    window.cancelAnimationFrame(tid);
    window.cancelAnimationFrame(did);
}

startDraw.addEventListener("click", drawDot);
endDraw.addEventListener("click", stop);
tbt.addEventListener("click", bounce)
