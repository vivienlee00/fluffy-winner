var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

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
    return (sqrt(xdist*xdist + ydist*ydist));
};


var findIt = function(e) {
    /* YOUR IMPLEMENTATION */
    dist = distance(e.X,e.Y,targetX,targetY);
};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);

