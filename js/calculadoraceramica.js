function calcularConEnter(event) {
    // Verificar si la tecla presionada es "Enter" (código 13)
    if (event.keyCode === 13) {
        calcularDivision();
    }
}

function calcularDivision() {
    // Obtener el valor ingresado por el usuario en el dividendo
    var dividendo = parseFloat(document.getElementById('numero1').value);

    // Verificar que el dividendo no sea cero
    if (dividendo === 0) {
        alert("No se puede dividir entre cero. Ingresa otro número.");
        return;
    }

    // Realizar la división y mostrar el resultado entero
    var resultado = dividendo / 1.50; // Divisor fijo

    // Redondear el resultado al número entero más cercano
    resultado = Math.round(resultado);

    document.getElementById('resultado').innerText = resultado + " cajas";

    // Calcular el resultado dividido por 4
    var resultadoDiv4 = dividendo / 4;
    resultadoDiv4 = Math.round(resultadoDiv4);
    document.getElementById('resultadoDiv4').innerText = resultadoDiv4;
    
    // Ocultar el divisor nuevamente
    document.getElementById('numero2').style.display = 'none';
}