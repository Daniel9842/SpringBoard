let points = {pointsarr:[]};
let allPoints={newpointsarr:[]};
let timerId = setInterval(() => checkPoints(),5000);
let timer = setInterval(() => getPoints(),1000);
let num1=0;
let num2=0;
let num3=0;
//cambia el color
function changeColor(number1,number2,number3){
	num1=number1;
	num2=number2;
	num3=number3;
}
//Envia los puntos a la cache en java. 
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
 // Obtiene los puntos de la cache de java.
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
			newDraw(allPoints.newpointsarr[i][0],allPoints.newpointsarr[i][1]);

		
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
		noStroke();
    	fill(num1,num2,num3);
    	ellipse(mouseX, mouseY, 20, 20);
		points.pointsarr.push([mouseX,mouseY]);
		//points.pointsarr.push([num1,num2,num3]);
  	}
  		if (mouseIsPressed === false) {
    	fill(255,255,255);
  	}
  
	}
	//Dibuja las nuevas posiciones.
	function newDraw(posX,posY) {
		noStroke();
  		fill(num1,num2,num3);
    	ellipse(posX, posY, 20, 20);
	}


	