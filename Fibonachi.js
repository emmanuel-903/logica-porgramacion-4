// Función para generar la secuencia de Fibonacci hasta un número dado
function generarFibonacci(hastaNumero) {
    let fibonacci = [0, 1];

    while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= hastaNumero) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }

    return fibonacci;
}

// Solicitar al usuario ingresar un número
let numeroIngresado = parseFloat(prompt("Ingrese un número para la secuencia de Fibonacci"));

// Verificar si el usuario ingresó un número válido
if (isNaN(numeroIngresado)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    // Generar la secuencia de Fibonacci hasta el número ingresado
    let secuenciaFibonacci = generarFibonacci(numeroIngresado);

    // Mostrar la secuencia generada
    console.log("Secuencia de Fibonacci hasta " + numeroIngresado + ":");
   document.write(secuenciaFibonacci);
    
}
