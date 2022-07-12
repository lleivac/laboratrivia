function check(){

	
let pregunta1 = document.preguntas.pregunta1.value;
let pregunta2 = document.preguntas.pregunta2.value;
let pregunta3 = document.preguntas.pregunta3.value;
let correctas = 0;

if (pregunta1 == "Miley Cyrus"){
	correctas++;
}

if(pregunta2 == "Rihanna"){
	correctas++;
}
if(pregunta3 == "Shakira"){
	correctas++;
}
document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("seleccion_correcta").innerHTML = "has terminado tienes "+ " "+ correctas +" "+"correctas."

}
function saludo(){

	let nombre = document.getElementById("fname");
	let username = nombre.value;
	alert("Hola "+ username+"!!!");
}

