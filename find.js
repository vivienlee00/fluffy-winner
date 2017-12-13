var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

console.log(box);
//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    /* YOUR IMPLEMENTATION */
    var xdist = x1 - x0;
    var ydist = y1 - y0;
    return (Math.sqrt(xdist*xdist + ydist*ydist));
};


var findIt = function(e) {
    /* YOUR IMPLEMENTATION */
    var dist = distance(e.clientX,e.clientY,targetX,targetY);
    var colorval = (dist / maxdist);
    console.log(dist);
    console.log(maxdist);
    box.setAttribute("style", "background-color: rgba(0,0,0,"+ colorval + ");");
    console.log("background-color: rgba(0,0,0,"+ colorval + ");");
};

/*
your OTHER FXNS

*/



var findmax = function() {
    var max = 0;
    const x0 = 0;
    const x1 = boxWidth;
    const y0 = 0;
    const y1 = boxHeight;
    if(max < distance(targetX, targetY, x0, y1))
	max = distance(targetX, targetY, x0, y1);
    if(max < distance(targetX, targetY, x1, y1))
	max = distance(targetX, targetY, x1, y1);
    if(max < distance(targetX, targetY, x0, y0))
	max = distance(targetX, targetY, x0, y0);
    if(max < distance(targetX, targetY, x1, y0))
	max = distance(targetX, targetY, x1, y0);
    console.log("findmax: " + max);
    return max;
}

var maxdist = findmax(); 

box.addEventListener("mousemove", findIt);

