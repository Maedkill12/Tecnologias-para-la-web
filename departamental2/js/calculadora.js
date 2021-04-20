var numero1 = document.getElementById("numero1"),
	numero2 = document.getElementById("numero2"),
	resultado = document.getElementById("resultado");

function sumaNumeros() {
    resultado.innerHTML = "Resultado: " + (+numero1.value + +numero2.value);
}

function restaNumeros() {
    resultado.innerHTML = "Resultado: " + (+numero1.value - +numero2.value);
}

function multiplicaNumeros() {
    resultado.innerHTML = "Resultado: " + (+numero1.value * +numero2.value);
}

function divideNumeros() {
    resultado.innerHTML = "Resultado: " + (+numero1.value / +numero2.value);
}