//Jeanne Locker
//SoftDev2 pd3
//HW04
//2016-03-01

var pic = document.getElementById("vimage2");
var intervalID = window.setInterval(drawDot, 16);
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var growing = true;
//var radius = 0;

var change = function(e){
    e.preventDefault()
    this.setAttribute("fill", "green");
};

var drawDot = function(){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var ci = document.getElementsByTagName("circle")[0];
    radius = parseInt(c.getAttribute());
    if(growing==true){
	radius = radius+1;
    }
    else{
	radius = radius-1;
    }

    if(radius >= (pic.width/2)){
	growing=false;
    }
    if(radius<=0){
	growing=true;
    } 
    ci.setAttribute("r", radius.toString());
    ci.setAttribute("cx",50);
    ci.setAttribute("cy",50);
    ci.setAttribute("fill", "red");
    ci.setAttribute("stroke", "black");
    //c.setAttribute("r","30");
    //c.addEventListener("click", change);
    //pic.appendChild(c);
};

//var clicked = function(e){
  //  if(e.toElement == this){
//	drawDot(e.offsetX, e.offsetY);
  //  }
//};
start.addEventListener("click", drawDot);
