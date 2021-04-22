var display = document.getElementById("display");
var potenciaActiva = false;

function clickDigito(digito) {
	if (potenciaActiva) {
		display.value += digito + ",";
		potenciaActiva = false;
	} else {
		display.value += digito;
	}
}
function reiniciar() {
	display.value = "";
	potenciaActiva = false;
}
function seleccionarOperacion(op) {
	switch (op) {
		case '=':
			display.value = eval(display.value);
			potenciaActiva = false;
			break;
		case 'factorial':
			display.value += "factorial(";
			break;
		case 'ln':
			display.value += "ln(";
			break;
		case 'log':
			display.value += "log(";
			break;
		case 'raiz':
			display.value += "raiz(";
			break;
		case 'potencia':
			potenciaActiva = true;
			display.value += "potencia(";
			break; 
	}
}
function factorial(d) {
	var resultado = 1;
	for (let i = 2; i <= d; i++) {
		resultado *= i;  
	}
	return resultado;
}
function ln(d) {
	return Math.log(d);
}
function log(d) {
	return Math.log10(d);
}
function raiz(d) {
	return Math.sqrt(d);
}
function potencia(x, y) {
	return Math.pow(x, y);
}