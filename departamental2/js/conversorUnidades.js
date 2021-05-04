// Longitud
var longitudElemento1 = document.getElementById("longitud1"),
	longitudElemento2 = document.getElementById("longitud2"),
	selectLongitud1 = document.getElementById("selectLongitud1").value,
	selectLongitud2 = document.getElementById("selectLongitud2").value,
	formula = document.getElementById("formula");

function cambiarSelectLongitud1() {
	selectLongitud1 = document.getElementById("selectLongitud1").value;
	longitud(selectLongitud1, selectLongitud2, longitudElemento1, longitudElemento2);
}
function cambiarSelectLongitud2() {
	selectLongitud2 = document.getElementById("selectLongitud2").value;
	longitud(selectLongitud1, selectLongitud2, longitudElemento1, longitudElemento2);
}
function cambiarLongitud() {
	longitud(selectLongitud1, selectLongitud2, longitudElemento1, longitudElemento2);
}

function longitud(f, t, e1, e2) {
	// Kilometro
	if (f == "kilometro" && t == "kilometro") {
		e2.value = e1.value;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "kilometro" && t == "metro") {
		e2.value = +e1.value * 1000;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1000";
	}
	if (f == "kilometro" && t == "centimetro") {
		e2.value = +e1.value * 100000;
		formula.innerHTML = "Multiplicar " + e1.value + " por 100000";
	}
	if (f == "kilometro" && t == "milimetro") {
		e2.value = +e1.value * eval("1e+6");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e+6";
	}
	if (f == "kilometro" && t == "micrometro") {
		e2.value = +e1.value * eval("1e+9");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e+9";
	}
	if (f == "kilometro" && t == "nanometro") {
		e2.value = +e1.value * eval("1e+12");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 1e+12";
	}
	if (f == "kilometro" && t == "milla") {
		e2.value = +e1.value * 0.621371;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 0.621371";
	}
	if (f == "kilometro" && t == "yarda") {
		e2.value = +e1.value * 1093.61;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 1093.61";
	}
	if (f == "kilometro" && t == "pie") {
		e2.value = +e1.value * 3280.84;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 3280.84";
	}
	if (f == "kilometro" && t == "pulgada") {
		e2.value = +e1.value * 39370.1;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 39370.1";
	}
	if (f == "kilometro" && t == "millanautica") {
		e2.value = +e1.value * 0.539957;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 0.539957";
	}

	// metro
	if (f == "metro" && t == "kilometro") {
		e2.value = +e1.value * 0.001;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.001";
	}
	if (f == "metro" && t == "metro") {
		e2.value = +e1.value;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "metro" && t == "centimetro") {
		e2.value = +e1.value * 100;
		formula.innerHTML = "Multiplicar " + e1.value + " por 100";
	}
	if (f == "metro" && t == "milimetro") {
		e2.value = +e1.value * 1000;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1000";
	}
	if (f == "metro" && t == "micrometro") {
		e2.value = +e1.value * eval("1e+6");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e+6";
	}
	if (f == "metro" && t == "nanometro") {
		e2.value = +e1.value * eval("1e+9");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 1e+9";
	}
	if (f == "metro" && t == "milla") {
		e2.value = +e1.value * 0.000621371;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 0.000621371";
	}
	if (f == "metro" && t == "yarda") {
		e2.value = +e1.value * 1.09361;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 1.09361";
	}
	if (f == "metro" && t == "pie") {
		e2.value = +e1.value * 3.28084;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 3.28084";
	}
	if (f == "metro" && t == "pulgada") {
		e2.value = +e1.value * 39.3701;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 39.3701";
	}
	if (f == "metro" && t == "millanautica") {
		e2.value = +e1.value * 0.000539957;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 0.000539957";
	}


	// Centimetro
	if (f == "centimetro" && t == "kilometro") {
		e2.value = +e1.value * eval("1e-5");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e-5";
	}
	if (f == "centimetro" && t == "metro") {
		e2.value = +e1.value * 0.01;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.01";
	}
	if (f == "centimetro" && t == "centimetro") {
		e2.value = +e1.value;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "centimetro" && t == "milimetro") {
		e2.value = +e1.value * 10;
		formula.innerHTML = "Multiplicar " + e1.value + " por 10";
	}
	if (f == "centimetro" && t == "micrometro") {
		e2.value = +e1.value * 10000;
		formula.innerHTML = "Multiplicar " + e1.value + " por 10000";
	}
	if (f == "centimetro" && t == "nanometro") {
		e2.value = +e1.value * eval("1e+7");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e+7";
	}
	if (f == "centimetro" && t == "milla") {
		e2.value = +e1.value * eval("6.2137e-6");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 6.2137e-6";
	}
	if (f == "centimetro" && t == "yarda") {
		e2.value = +e1.value * 0.0109361;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 0.0109361";
	}
	if (f == "centimetro" && t == "pie") {
		e2.value = +e1.value * 0.0328084;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 0.0328084";
	}
	if (f == "centimetro" && t == "pulgada") {
		e2.value = +e1.value * 0.393701;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 0.393701";
	}
	if (f == "centimetro" && t == "millanautica") {
		e2.value = +e1.value * eval("5.3996e-6");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 5.3996e-6";
	}

	// milimetro
	if (f == "milimetro" && t == "kilometro") {
		e2.value = +e1.value * eval("1e-6");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e-6";
	}
	if (f == "milimetro" && t == "metro") {
		e2.value = +e1.value * 0.001;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.001";
	}
	if (f == "milimetro" && t == "centimetro") {
		e2.value = +e1.value * 0.1;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.1";
	}
	if (f == "milimetro" && t == "milimetro") {
		e2.value = +e1.value;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "milimetro" && t == "micrometro") {
		e2.value = +e1.value * 1000;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1000";
	}
	if (f == "milimetro" && t == "nanometro") {
		e2.value = +e1.value * eval("1e+6");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e+6";
	}
	if (f == "milimetro" && t == "milla") {
		e2.value = +e1.value * eval("6.2137e-7");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 6.2137e-7";
	}
	if (f == "milimetro" && t == "yarda") {
		e2.value = +e1.value * 0.00109361;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 0.00109361";
	}
	if (f == "milimetro" && t == "pie") {
		e2.value = +e1.value * 0.00328084;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 0.00328084";
	}
	if (f == "milimetro" && t == "pulgada") {
		e2.value = +e1.value * 0.0393701;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 0.0393701";
	}
	if (f == "milimetro" && t == "millanautica") {
		e2.value = +e1.value * eval("5.3996e-7");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 5.3996e-7";
	}

	// micrometro
	if (f == "micrometro" && t == "kilometro") {
		e2.value = +e1.value * eval("1e-9");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e-9";
	}
	if (f == "micrometro" && t == "metro") {
		e2.value = +e1.value * eval("1e-6");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e-6";
	}
	if (f == "micrometro" && t == "centimetro") {
		e2.value = +e1.value * eval("1e-4")
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e-4";
	}
	if (f == "micrometro" && t == "milimetro") {
		e2.value = +e1.value * 0.001;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.001";
	}
	if (f == "micrometro" && t == "micrometro") {
		e2.value = +e1.value;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "micrometro" && t == "nanometro") {
		e2.value = +e1.value * 1000;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1000";
	}
	if (f == "micrometro" && t == "milla") {
		e2.value = +e1.value * eval("6.2137e-10");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 6.2137e-10";
	}
	if (f == "micrometro" && t == "yarda") {
		e2.value = +e1.value * eval("1.0936e-6");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 1.0936e-6";
	}
	if (f == "micrometro" && t == "pie") {
		e2.value = +e1.value * eval("3.2808e-6");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 3.2808e-6";
	}
	if (f == "micrometro" && t == "pulgada") {
		e2.value = +e1.value * eval("3.937e-5");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 3.937e-5";
	}
	if (f == "micrometro" && t == "millanautica") {
		e2.value = +e1.value * eval("5.3996e-10");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 5.3996e-10";
	}

	// nanometro
	if (f == "nanometro" && t == "kilometro") {
		e2.value = +e1.value * eval("1e-12");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e-12";
	}
	if (f == "nanometro" && t == "metro") {
		e2.value = +e1.value * eval("1e-9");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e-9";
	}
	if (f == "nanometro" && t == "centimetro") {
		e2.value = +e1.value * eval("1e-7")
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e-7";
	}
	if (f == "nanometro" && t == "milimetro") {
		e2.value = +e1.value * eval("1e-6");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1e-6";
	}
	if (f == "nanometro" && t == "micrometro") {
		e2.value = +e1.value * 0.001;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.001";
	}
	if (f == "nanometro" && t == "nanometro") {
		e2.value = +e1.value;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "nanometro" && t == "milla") {
		e2.value = +e1.value * eval("6.2137e-13");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 6.2137e-13";
	}
	if (f == "nanometro" && t == "yarda") {
		e2.value = +e1.value * eval("1.0936e-9");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 1.0936e-9";
	}
	if (f == "nanometro" && t == "pie") {
		e2.value = +e1.value * eval("3.2808e-9");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 3.2808e-9";
	}
	if (f == "nanometro" && t == "pulgada") {
		e2.value = +e1.value * eval("3.937e-8");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 3.937e-8";
	}
	if (f == "nanometro" && t == "millanautica") {
		e2.value = +e1.value * eval("5.3996e-13");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 5.3996e-13";
	}

	// milla
	if (f == "milla" && t == "kilometro") {
		e2.value = +e1.value * 1.60934;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1.60934";
	}
	if (f == "milla" && t == "metro") {
		e2.value = +e1.value * 1609.34;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1609.34";
	}
	if (f == "milla" && t == "centimetro") {
		e2.value = +e1.value * 160934
		formula.innerHTML = "Multiplicar " + e1.value + " por 160934";
	}
	if (f == "milla" && t == "milimetro") {
		e2.value = +e1.value * eval("1.609e+6");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1.609e+6";
	}
	if (f == "milla" && t == "micrometro") {
		e2.value = +e1.value * eval("1.609e+9");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1.609e+9";
	}
	if (f == "milla" && t == "nanometro") {
		e2.value = +e1.value * eval("1.609e+12");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1.609e+12";
	}
	if (f == "milla" && t == "milla") {
		e2.value = +e1.value;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "milla" && t == "yarda") {
		e2.value = +e1.value * 1760;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1760";
	}
	if (f == "milla" && t == "pie") {
		e2.value = +e1.value * 5280;
		formula.innerHTML = "Multiplicar " + e1.value + " por 5280";
	}
	if (f == "milla" && t == "pulgada") {
		e2.value = +e1.value * 63360;
		formula.innerHTML = "Multiplicar " + e1.value + " por 63360";
	}
	if (f == "milla" && t == "millanautica") {
		e2.value = +e1.value * 0.868976;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 0.868976";
	}

	// yarda
	if (f == "yarda" && t == "kilometro") {
		e2.value = +e1.value * 0.0009144;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.0009144";
	}
	if (f == "yarda" && t == "metro") {
		e2.value = +e1.value * 0.9144;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.9144";
	}
	if (f == "yarda" && t == "centimetro") {
		e2.value = +e1.value * 91.44;
		formula.innerHTML = "Multiplicar " + e1.value + " por 91.44";
	}
	if (f == "yarda" && t == "milimetro") {
		e2.value = +e1.value * 914.4;
		formula.innerHTML = "Multiplicar " + e1.value + " por 914.4";
	}
	if (f == "yarda" && t == "micrometro") {
		e2.value = +e1.value * 914400;
		formula.innerHTML = "Multiplicar " + e1.value + " por 914400";
	}
	if (f == "yarda" && t == "nanometro") {
		e2.value = +e1.value * eval("9.144e+8");
		formula.innerHTML = "Multiplicar " + e1.value + " por 9.144e+8";
	}
	if (f == "yarda" && t == "milla") {
		e2.value = +e1.value * 0.000568182;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.000568182";
	}
	if (f == "yarda" && t == "yarda") {
		e2.value = +e1.value;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "yarda" && t == "pie") {
		e2.value = +e1.value * 3;
		formula.innerHTML = "Multiplicar " + e1.value + " por 3";
	}
	if (f == "yarda" && t == "pulgada") {
		e2.value = +e1.value * 36;
		formula.innerHTML = "Multiplicar " + e1.value + " por 36";
	}
	if (f == "yarda" && t == "millanautica") {
		e2.value = +e1.value * 0.000493737;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 0.000493737";
	}

	// pie
	if (f == "pie" && t == "kilometro") {
		e2.value = +e1.value * 0.0003048;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.0003048";
	}
	if (f == "pie" && t == "metro") {
		e2.value = +e1.value * 0.3048;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.3048";
	}
	if (f == "pie" && t == "centimetro") {
		e2.value = +e1.value * 30.48;
		formula.innerHTML = "Multiplicar " + e1.value + " por 30.48";
	}
	if (f == "pie" && t == "milimetro") {
		e2.value = +e1.value * 304.8;
		formula.innerHTML = "Multiplicar " + e1.value + " por 304.8";
	}
	if (f == "pie" && t == "micrometro") {
		e2.value = +e1.value * 304800;
		formula.innerHTML = "Multiplicar " + e1.value + " por 304800";
	}
	if (f == "pie" && t == "nanometro") {
		e2.value = +e1.value * eval("3.048e+8");
		formula.innerHTML = "Multiplicar " + e1.value + " por 3.048e+8";
	}
	if (f == "pie" && t == "milla") {
		e2.value = +e1.value * 0.000189394;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.000189394";
	}
	if (f == "pie" && t == "yarda") {
		e2.value = +e1.value * 0.333333;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.333333";
	}
	if (f == "pie" && t == "pie") {
		e2.value = +e1.value;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "pie" && t == "pulgada") {
		e2.value = +e1.value * 12;
		formula.innerHTML = "Multiplicar " + e1.value + " por 12";
	}
	if (f == "pie" && t == "millanautica") {
		e2.value = +e1.value * 0.000164579;
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 0.000164579";
	}

	// pulgada
	if (f == "pulgada" && t == "kilometro") {
		e2.value = +e1.value * eval("2.54e-5");
		formula.innerHTML = "Multiplicar " + e1.value + " por 2.54e-5";
	}
	if (f == "pulgada" && t == "metro") {
		e2.value = +e1.value * 0.0254;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.0254";
	}
	if (f == "pulgada" && t == "centimetro") {
		e2.value = +e1.value * 2.54;
		formula.innerHTML = "Multiplicar " + e1.value + " por 2.54";
	}
	if (f == "pulgada" && t == "milimetro") {
		e2.value = +e1.value * 25.4;
		formula.innerHTML = "Multiplicar " + e1.value + " por 25.4";
	}
	if (f == "pulgada" && t == "micrometro") {
		e2.value = +e1.value * 25400;
		formula.innerHTML = "Multiplicar " + e1.value + " por 25400";
	}
	if (f == "pulgada" && t == "nanometro") {
		e2.value = +e1.value * eval("2.54e+7");
		formula.innerHTML = "Multiplicar " + e1.value + " por 2.54e+7";
	}
	if (f == "pulgada" && t == "milla") {
		e2.value = +e1.value * eval("1.5783e-5");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1.5783e-5";
	}
	if (f == "pulgada" && t == "yarda") {
		e2.value = +e1.value * 0.0277778;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.0277778";
	}
	if (f == "pulgada" && t == "pie") {
		e2.value = +e1.value * 0.0833333;
		formula.innerHTML = "Multiplicar " + e1.value + " por 0.0833333";
	}
	if (f == "pulgada" && t == "pulgada") {
		e2.value = +e1.value;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "pulgada" && t == "millanautica") {
		e2.value = +e1.value * eval("1.3715e-5");
		formula.innerHTML = "Para obtener un resultado aproximado, multiplicar " + e1.value + " por 1.3715e-5";
	}

	// millanautica
	if (f == "millanautica" && t == "kilometro") {
		e2.value = +e1.value * 1.852;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1.852";
	}
	if (f == "millanautica" && t == "metro") {
		e2.value = +e1.value * 1852;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1852";
	}
	if (f == "millanautica" && t == "centimetro") {
		e2.value = +e1.value * 185200;
		formula.innerHTML = "Multiplicar " + e1.value + " por 185200";
	}
	if (f == "millanautica" && t == "milimetro") {
		e2.value = +e1.value * eval("1.852e+6");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1.852e+6";
	}
	if (f == "millanautica" && t == "micrometro") {
		e2.value = +e1.value * eval("1.852e+9");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1.852e+9";
	}
	if (f == "millanautica" && t == "nanometro") {
		e2.value = +e1.value * eval("1.852e+12");
		formula.innerHTML = "Multiplicar " + e1.value + " por 1.852e+12";
	}
	if (f == "millanautica" && t == "milla") {
		e2.value = +e1.value * 1.15078;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1.15078";
	}
	if (f == "millanautica" && t == "yarda") {
		e2.value = +e1.value * 2025.3728007;
		formula.innerHTML = "Multiplicar " + e1.value + " por 2025.3728007";
	}
	if (f == "millanautica" && t == "pie") {
		e2.value = +e1.value * 6076.12;
		formula.innerHTML = "Multiplicar " + e1.value + " por 6076.12";
	}
	if (f == "millanautica" && t == "pulgada") {
		e2.value = +e1.value * 72913.4;
		formula.innerHTML = "Multiplicar " + e1.value + " por 72913.4";
	}
	if (f == "millanautica" && t == "millanautica") {
		e2.value = +e1.value;
		formula.innerHTML = "Multiplicar " + e1.value + " por 1";
	}

}

// Temperatura
var temperaturaElemento1 = document.getElementById("temperatura1"),
	temperaturaElemento2 = document.getElementById("temperatura2"),
	selectTemperatura1 = document.getElementById("selectTemperatura1").value,
	selectTemperatura2 = document.getElementById("selectTemperatura2").value,
	formulaT = document.getElementById("formulaT");

function cambiarSelectTemperatura1() {
	selectTemperatura1 = document.getElementById("selectTemperatura1").value;
	temperatura(selectTemperatura1, selectTemperatura2, temperaturaElemento1, temperaturaElemento2);
}
function cambiarSelectTemperatura2() {
	selectTemperatura2 = document.getElementById("selectTemperatura2").value;
	temperatura(selectTemperatura1, selectTemperatura2, temperaturaElemento1, temperaturaElemento2);
}

function cambiarTemperatura() {
	temperatura(selectTemperatura1, selectTemperatura2, temperaturaElemento1, temperaturaElemento2);
}

function temperatura(f, t, e1, e2) {
	// celsius
	if (f == "celsius" && t == "celsius") {
		e2.value = e1.value;
		formulaT.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "celsius" && t == "fahrenheit") {
		e2.value = (+e1.value * 9/5) + 32;
		formulaT.innerHTML = "(" + e1.value + "x9/5) + 32";
	}
	if (f == "celsius" && t == "kelvin") {
		e2.value = (+e1.value + 273.15);
		formulaT.innerHTML = "(" + e1.value + "+273.15)";
	}

	// fahrenheit
	if (f == "fahrenheit" && t == "celsius") {
		e2.value = (+e1.value - 32) * 5/9;
		formulaT.innerHTML = "("+e1.value+" °F − 32) × 5/9 ";
	}
	if (f == "fahrenheit" && t == "fahrenheit") {
		e2.value = +e1.value;
		formulaT.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "fahrenheit" && t == "kelvin") {
		e2.value = (+e1.value - 32) * 5/9 + 273.15;
		formulaT.innerHTML = "("+e1.value+" °F − 32) × 5/9 + 273.15";
	}

	// kelvin
	if (f == "kelvin" && t == "celsius") {
		e2.value = (+e1.value - 273.15);
		formulaT.innerHTML = +e1.value+" K − 273.15";
	}
	if (f == "kelvin" && t == "fahrenheit") {
		e2.value = (+e1.value-273.15)*9/5+32;
		formulaT.innerHTML = "("+e1.value+" K − 273.15) × 9/5 + 32";
	}
	if (f == "kelvin" && t == "kelvin") {
		e2.value = +e1.value;
		formulaT.innerHTML = "Multiplicar " + e1.value + " por 1";
	}

}

// Masa
var masaElemento1 = document.getElementById("masa1"),
	masaElemento2 = document.getElementById("masa2"),
	selectMasa1 = document.getElementById("selectMasa1").value,
	selectMasa2 = document.getElementById("selectMasa2").value,
	formulaM = document.getElementById("formulaM");

function cambiarSelectMasa1() {
	selectMasa1 = document.getElementById("selectMasa1").value;
	masa(selectMasa1, selectMasa2, masaElemento1, masaElemento2);
}
function cambiarSelectMasa2() {
	selectMasa2 = document.getElementById("selectMasa2").value;
	masa(selectMasa1, selectMasa2, masaElemento1, masaElemento2);
}
function cambiarMasa() {
	masa(selectMasa1, selectMasa2, masaElemento1, masaElemento2);
}

function masa(f, t, e1, e2) {
	// tonelada
	if (f == "tonelada" && t == "tonelada") {
		e2.value = +e1.value;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "tonelada" && t == "kilogramo") {
		e2.value = +e1.value * 1000;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1000";
	}
	if (f == "tonelada" && t == "gramo") {
		e2.value = +e1.value * eval("1e+6");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1e+6";
	}
	if (f == "tonelada" && t == "miligramo") {
		e2.value = +e1.value * eval("1e+9");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1e+9";
	}
	if (f == "tonelada" && t == "macrogramo") {
		e2.value = +e1.value * eval("1e+12");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1e+12";
	}
	if (f == "tonelada" && t == "toneladalarga") {
		e2.value = +e1.value * 0.984207;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.984207";
	}
	if (f == "tonelada" && t == "toneladacorta") {
		e2.value = +e1.value * 1.10231;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1.10231";
	}
	if (f == "tonelada" && t == "stone") {
		e2.value = +e1.value * 157.473;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 157.473";
	}
	if (f == "tonelada" && t == "libra") {
		e2.value = +e1.value * 2204.62;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 2204.62";
	}
	if (f == "tonelada" && t == "onza") {
		e2.value = +e1.value * 35274;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 35274";
	}

	// kilogramo
	if (f == "kilogramo" && t == "tonelada") {
		e2.value = +e1.value * 0.001;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.001";
	}
	if (f == "kilogramo" && t == "kilogramo") {
		e2.value = +e1.value;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "kilogramo" && t == "gramo") {
		e2.value = +e1.value * 1000;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1000";
	}
	if (f == "kilogramo" && t == "miligramo") {
		e2.value = +e1.value * eval("1e+6");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1e+6";
	}
	if (f == "kilogramo" && t == "macrogramo") {
		e2.value = +e1.value * eval("1e+9");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1e+9";
	}
	if (f == "kilogramo" && t == "toneladalarga") {
		e2.value = +e1.value * 0.000984207;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.000984207";
	}
	if (f == "kilogramo" && t == "toneladacorta") {
		e2.value = +e1.value * 0.00110231;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.00110231";
	}
	if (f == "kilogramo" && t == "stone") {
		e2.value = +e1.value * 0.157473;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.157473";
	}
	if (f == "kilogramo" && t == "libra") {
		e2.value = +e1.value * 2.20462;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 2.20462";
	}
	if (f == "kilogramo" && t == "onza") {
		e2.value = +e1.value * 35.274;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 35.274";
	}

	// gramo
	if (f == "gramo" && t == "tonelada") {
		e2.value = +e1.value * eval("1e-6");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1e-6";
	}
	if (f == "gramo" && t == "kilogramo") {
		e2.value = +e1.value * 0.001;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.001";
	}
	if (f == "gramo" && t == "gramo") {
		e2.value = +e1.value;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "gramo" && t == "miligramo") {
		e2.value = +e1.value * 1000;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1000";
	}
	if (f == "gramo" && t == "macrogramo") {
		e2.value = +e1.value * eval("1e+6");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1e+6";
	}
	if (f == "gramo" && t == "toneladalarga") {
		e2.value = +e1.value * eval("9.8421e-7");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 9.8421e-7";
	}
	if (f == "gramo" && t == "toneladacorta") {
		e2.value = +e1.value * eval("1.1023e-6");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1.1023e-6";
	}
	if (f == "gramo" && t == "stone") {
		e2.value = +e1.value * 0.000157473;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.000157473";
	}
	if (f == "gramo" && t == "libra") {
		e2.value = +e1.value * 0.00220462;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.00220462";
	}
	if (f == "gramo" && t == "onza") {
		e2.value = +e1.value * 0.035274;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.035274";
	}

	// miligramo
	if (f == "miligramo" && t == "tonelada") {
		e2.value = +e1.value * eval("1e-9");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1e-9";
	}
	if (f == "miligramo" && t == "kilogramo") {
		e2.value = +e1.value * eval("1e-6");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1e-6";
	}
	if (f == "miligramo" && t == "gramo") {
		e2.value = +e1.value * 0.001;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.001";
	}
	if (f == "miligramo" && t == "miligramo") {
		e2.value = +e1.value;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "miligramo" && t == "macrogramo") {
		e2.value = +e1.value * 1000;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1000";
	}
	if (f == "miligramo" && t == "toneladalarga") {
		e2.value = +e1.value * eval("9.8421e-10");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 9.8421e-10";
	}
	if (f == "miligramo" && t == "toneladacorta") {
		e2.value = +e1.value * eval("1.1023e-9");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1.1023e-9";
	}
	if (f == "miligramo" && t == "stone") {
		e2.value = +e1.value * eval("1.5747e-7");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1.5747e-7";
	}
	if (f == "miligramo" && t == "libra") {
		e2.value = +e1.value * eval("2.2046e-6");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 2.2046e-6";
	}
	if (f == "miligramo" && t == "onza") {
		e2.value = +e1.value * eval("3.5274e-5");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 3.5274e-5";
	}

	// microgramo
	if (f == "macrogramo" && t == "tonelada") {
		e2.value = +e1.value * eval("1e-12");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1e-12";
	}
	if (f == "macrogramo" && t == "kilogramo") {
		e2.value = +e1.value * eval("1e-9");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1e-9";
	}
	if (f == "macrogramo" && t == "gramo") {
		e2.value = +e1.value * eval("1e-6");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1e-6";
	}
	if (f == "macrogramo" && t == "miligramo") {
		e2.value = +e1.value * 0.001;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.001";
	}
	if (f == "macrogramo" && t == "macrogramo") {
		e2.value = +e1.value;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "macrogramo" && t == "toneladalarga") {
		e2.value = +e1.value * eval("9.8421e-13");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 9.8421e-13";
	}
	if (f == "macrogramo" && t == "toneladacorta") {
		e2.value = +e1.value * eval("1.1023e-12");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1.1023e-12";
	}
	if (f == "macrogramo" && t == "stone") {
		e2.value = +e1.value * eval("1.5747e-10");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1.5747e-10";
	}
	if (f == "macrogramo" && t == "libra") {
		e2.value = +e1.value * eval("2.2046e-9");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 2.2046e-9";
	}
	if (f == "macrogramo" && t == "onza") {
		e2.value = +e1.value * eval("3.5274e-8");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 3.5274e-8";
	}

	// tonelada larga
	if (f == "toneladalarga" && t == "tonelada") {
		e2.value = +e1.value * 1.01605;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1.01605";
	}
	if (f == "toneladalarga" && t == "kilogramo") {
		e2.value = +e1.value * 1016.05;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1016.05";
	}
	if (f == "toneladalarga" && t == "gramo") {
		e2.value = +e1.value * eval("1.016e+6");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1.016e+6";
	}
	if (f == "toneladalarga" && t == "miligramo") {
		e2.value = +e1.value * eval("1.016e+9");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1.016e+9";
	}
	if (f == "toneladalarga" && t == "macrogramo") {
		e2.value = +e1.value * eval("1.016e+12");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1.016e+12";
	}
	if (f == "toneladalarga" && t == "toneladalarga") {
		e2.value = +e1.value;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "toneladalarga" && t == "toneladacorta") {
		e2.value = +e1.value * 1.12;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1.12";
	}
	if (f == "toneladalarga" && t == "stone") {
		e2.value = +e1.value * 160;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 160";
	}
	if (f == "toneladalarga" && t == "libra") {
		e2.value = +e1.value * 2240;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 2240";
	}
	if (f == "toneladalarga" && t == "onza") {
		e2.value = +e1.value * 35840;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 35840";
	}

	// tonelada corta
	if (f == "toneladacorta" && t == "tonelada") {
		e2.value = +e1.value * 0.907185;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.907185";
	}
	if (f == "toneladacorta" && t == "kilogramo") {
		e2.value = +e1.value * 907.185;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 907.185";
	}
	if (f == "toneladacorta" && t == "gramo") {
		e2.value = +e1.value * 907185;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 907185";
	}
	if (f == "toneladacorta" && t == "miligramo") {
		e2.value = +e1.value * eval("9.072e+8");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 9.072e+8";
	}
	if (f == "toneladacorta" && t == "macrogramo") {
		e2.value = +e1.value * eval("9.072e+11");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 9.072e+11";
	}
	if (f == "toneladacorta" && t == "toneladalarga") {
		e2.value = +e1.value * 0.892857;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.892857";
	}
	if (f == "toneladacorta" && t == "toneladacorta") {
		e2.value = +e1.value;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "toneladacorta" && t == "stone") {
		e2.value = +e1.value * 142.857;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 142.857";
	}
	if (f == "toneladacorta" && t == "libra") {
		e2.value = +e1.value * 2000;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 2000";
	}
	if (f == "toneladacorta" && t == "onza") {
		e2.value = +e1.value * 32000;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 32000";
	}

	// stone
	if (f == "stone" && t == "tonelada") {
		e2.value = +e1.value * 0.00635029;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.00635029";
	}
	if (f == "stone" && t == "kilogramo") {
		e2.value = +e1.value * 6.35029;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 6.35029";
	}
	if (f == "stone" && t == "gramo") {
		e2.value = +e1.value * 6350.29;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 6350.29";
	}
	if (f == "stone" && t == "miligramo") {
		e2.value = +e1.value * eval("6.35e+6");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 6.35e+6";
	}
	if (f == "stone" && t == "macrogramo") {
		e2.value = +e1.value * eval("6.35e+9");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 6.35e+9";
	}
	if (f == "stone" && t == "toneladalarga") {
		e2.value = +e1.value * 0.00625;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.00625";
	}
	if (f == "stone" && t == "toneladacorta") {
		e2.value = +e1.value * 0.007;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.007";
	}
	if (f == "stone" && t == "stone") {
		e2.value = +e1.value;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "stone" && t == "libra") {
		e2.value = +e1.value * 14;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 14";
	}
	if (f == "stone" && t == "onza") {
		e2.value = +e1.value * 224;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 224";
	}

	// libra
	if (f == "libra" && t == "tonelada") {
		e2.value = +e1.value * 0.000453592;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.000453592";
	}
	if (f == "libra" && t == "kilogramo") {
		e2.value = +e1.value * 0.453592;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.453592";
	}
	if (f == "libra" && t == "gramo") {
		e2.value = +e1.value * 453.592;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 453.592";
	}
	if (f == "libra" && t == "miligramo") {
		e2.value = +e1.value * 453592;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 453592";
	}
	if (f == "libra" && t == "macrogramo") {
		e2.value = +e1.value * eval("4.536e+8");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 4.536e+8";
	}
	if (f == "libra" && t == "toneladalarga") {
		e2.value = +e1.value * 0.000446429;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.000446429";
	}
	if (f == "libra" && t == "toneladacorta") {
		e2.value = +e1.value * 0.0005;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.0005";
	}
	if (f == "libra" && t == "stone") {
		e2.value = +e1.value * 0.0714286;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.0714286";
	}
	if (f == "libra" && t == "libra") {
		e2.value = +e1.value;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
	if (f == "libra" && t == "onza") {
		e2.value = +e1.value * 16;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 16";
	}

	// onza
	if (f == "onza" && t == "tonelada") {
		e2.value = +e1.value * eval("2.835e-5");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 2.835e-5";
	}
	if (f == "onza" && t == "kilogramo") {
		e2.value = +e1.value * 0.0283495;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.0283495";
	}
	if (f == "onza" && t == "gramo") {
		e2.value = +e1.value * 28.3495;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 28.3495";
	}
	if (f == "onza" && t == "miligramo") {
		e2.value = +e1.value * 28349.5;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 28349.5";
	}
	if (f == "onza" && t == "macrogramo") {
		e2.value = +e1.value * eval("2.835e+7");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 2.835e+7";
	}
	if (f == "onza" && t == "toneladalarga") {
		e2.value = +e1.value * eval("2.7902e-5");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 2.7902e-5";
	}
	if (f == "onza" && t == "toneladacorta") {
		e2.value = +e1.value * eval("3.125e-5");
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 3.125e-5";
	}
	if (f == "onza" && t == "stone") {
		e2.value = +e1.value * 0.00446429;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.00446429";
	}
	if (f == "onza" && t == "libra") {
		e2.value = +e1.value * 0.0625;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 0.0625";
	}
	if (f == "onza" && t == "onza") {
		e2.value = +e1.value;
		formulaM.innerHTML = "Multiplicar " + e1.value + " por 1";
	}
}