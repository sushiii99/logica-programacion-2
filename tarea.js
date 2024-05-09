// Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
// Debe ser capaz de identificar si los datos de entrada sean de tipo number, 
// en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.


function convertirTemperatura() {
    let temperaturaCelsius = prompt("Ingrese la temperatura en grados Celsius:");

    // Verificar si la entrada es un número
    if (isNaN(temperaturaCelsius)) {
        alert("Error: La temperatura ingresada no es un número.");  //console.error aparece en rojito en consola
        convertirTemperatura(); // Volver a solicitar los datos
        return;
    }

    // Convertir temperatura a grados Fahrenheit y Kelvin
    let temperaturaFahrenheit = (parseFloat(temperaturaCelsius) * 9 / 5) + 32;
    let temperaturaKelvin = parseFloat(temperaturaCelsius) + 273.15; //tambien sirve Number 

    // Imprimir resultados
    console.log("Grados Fahrenheit:", temperaturaFahrenheit);
    console.log("Grados Kelvin:", temperaturaKelvin);
}

convertirTemperatura();

// Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
// Debe imprimir ambos resultados por consola o por el DOM.
// function fahrenheit(temp){
//     fah = 9/5 * temp + 32
// console.log("Grados Fahrenheit: " + fah)
// }

// function kelvin(temp){
//     k = temp + 273.15
//     console.log("Grados Kelvin: " + k)
// }