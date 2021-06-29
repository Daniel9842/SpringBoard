# Board
[![Heroku](https://www.herokucdn.com/deploy/button.png)](https://springboardarsw.herokuapp.com/board.html)
### Daniel Santiago Ducuara Ardila
### 28/06/2021

## Resumen
Este repositorio consiste en la elaboración de un tablero interactivo, es decir que lo que dibuje una persona
debe aparecer en el tablero de los demás, el tablero contiene opciones como cambiar de color y borrar todo
el tablero.

## Ejecución localmente 
Para la ejecución local se debe ejecutar la clase SpringBoardDraw y en el navegador colocar lo siguiente http://localhost:8080/board.html

## Ejecución en Heroku

El tablero está desplegado en heroku, el color por defecto para dibujar es negro, se puede cambiar de color seleccionando el color.
![Heroku Heroku](image/heroku1.PNG "Heroku HerokuPaso1")<br>
Se comienza a dibujar en el tablero.
![Heroku Heroku](image/heroku2.PNG "Heroku HerokuPaso2")<br>
Posteriormente el dibujo realizado debe aparecer en otra ventana.
![Heroku Heroku](images/heroku3.PNG "Heroku test3")<br>
Al seleccionar el botón borrar se borra lo realizado en el tablero.
![Heroku Heroku](image/heroku1.PNG "Heroku HerokuPaso4")<br>

## Diagrama de clases

### Paquete Board
![Design Board](Design/board.PNG "Board")<br>
El paquete board consta de la clase SpringBoardDraw que ejecuta la aplicación spring boot, la clase consta de dos
subpaquetes, el controlador de spring boot y cache que es una clase encargada de almacenar los puntos enviados por
el usuario.

### Paquete Controller
![Design Controller](Design/controller.PNG "Controller")<br>
El paquete Controller consta de la clase BoardController que contiene un objeto savePoints el cual guardará los puntos dibujados por el usuario,
el controlador contiene dos métodos, processPoints recibe como parámetro una cadena que contiene los puntos dibujador por el usuario y los envía
a savePoints y contiene el método getPositions para obtener de nuevo la cadena con los puntos.

### Paquete Cache
![Design savepoints](Design/savepoints.PNG "savepoints")<br>
El paquete  cache contiene la clase savePoints que se encarga de almacenar y retornar la cadena de puntos dibujador por los usuarios.


## Reporte de pruebas
Se realiza el reporte de pruebas con todas las pruebas satisfactorias.
- Se realizan dos pruebas en la que se envían cadenas a la clase savePoints y se verifica que retorne los puntos correctamente.
  ![Tests Test Report](images/test.PNG "Test Report")<br>


### Productividad
La productividad de este proyecto fue de 250LOC/5 horas .
