let points = {pointsarr:[]};
let allPoints={newpointsarr:[]};
let timerId = setInterval(() => checkPoints(),5000);
let timer = setInterval(() => getPoints(),1000);
 


function checkPoints(){
    let msg = points;
    points = {pointsarr:[]};    
         fetch("/points",{
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(msg)
         })
         .then(res=> res.json())
 }
 
function getPoints(){
	fetch("/newPoints",{
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             }
         })
		 .then(res=> res.json())
		 .then(res => allPoints = res)
		 .then(resultPoints => console.log(resultPoints));
	
	for(let i = 0; i < allPoints.newpointsarr.length; i++) { 
		//console.log(allPoints.pointsarr[i][0]);
		//console.log(allPoints.pointsarr[i][1]);
		newDraw(allPoints.newpointsarr[i][0],allPoints.newpointsarr[i][1])
	}
	
}  
	//Este código asume que las librerías de P5.js ya están cargadas.
	//Esta función se ejecuta una sola vez al inicio del script.
	function setup() {
  		createCanvas(640, 480);
	}
	// Esta función se ejecuta repetidas veces indefinidamente.
	function draw() {
  		if (mouseIsPressed === true) {
    	fill(0,0,0);
    	ellipse(mouseX, mouseY, 20, 20);
    	points.pointsarr.push([mouseX,mouseY]);
  	}
  		if (mouseIsPressed === false) {
    	fill(255,255,255);
  	}
  
	}
	
	function newDraw(posX,posY) {
  		fill(0,0,0);
    	ellipse(posX, posY, 20, 20);
	}


	