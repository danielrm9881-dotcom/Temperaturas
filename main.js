let celsius;
let entradaValida = false;

// Ciclo para solicitar el dato hasta que sea un número válido
while (!entradaValida) {
    let entrada = prompt("Ingresa la temperatura en grados Celsius:");

    // Si el usuario presiona "Cancelar" en el prompt
    if (entrada === null) {
        alert("Operación cancelada por el usuario.");
        break;
    }

    // Validar que la entrada no esté vacía y que sea un número real
    let valorLimpio = entrada.trim();
    if (valorLimpio !== "" && !isNaN(valorLimpio)) {
        celsius = Number(valorLimpio);
        entradaValida = true;
    } else {
        alert(" Error: El valor ingresado no es un número válido. Por favor, intenta de nuevo.");
    }
}

// Si se obtuvo un número válido, realizamos los cálculos
if (entradaValida) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    // Mostrar resultados por consola
    console.log(`--- Resultados de la conversión ---`);
    console.log(`Grados Celsius ingresados: ${celsius}°C`);
    console.log(`Grados Kelvin: ${kelvin}`);
    console.log(`Grados Fahrenheit: ${fahrenheit}`);

    // Mostrar resultados en el DOM (HTML)
    const contenedorResultado = document.getElementById("resultado");
    contenedorResultado.innerHTML = `
        <p>Celsius: ${celsius} °C</p>
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
        <p>Grados Fahrenheit: ${fahrenheit}</p>
    `;
}