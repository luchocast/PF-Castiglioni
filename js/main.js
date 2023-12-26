// Función para validar el nombre
let validarNombre = () => {
    let nombre = prompt("Por favor ingresa tu nombre");
    // Uso metodo trim
    nombre = nombre.trim();
    // Uso expresion regular para que haya mas de un digito
    let regExp = /\d/;
    // Uso metodo test para verificar que cumpla
    let tieneNumeros = regExp.test(nombre);
    
    while (nombre === "" || tieneNumeros) {
        if (nombre === "") {
            alert("Nombre no ingresado");
        } else {
            alert("El nombre no deberia contener números");
        }
        nombre = prompt("Por favor ingresa tu nombre correctamente y sin números");
        nombre = nombre.trim();
        tieneNumeros = regExp.test(nombre);
    }

    return nombre;
};


// Función para validar la edad
let validarEdad = () => {
    let edad = parseInt(prompt("Por favor ingresa tu edad"));

    while (isNaN(edad) || edad < 18) {
        if (edad < 18) {
            alert("Debes ser mayor de 18 años");
        } else {
            alert("Edad no ingresada correctamente (solo números)");
        }
        edad = parseInt(prompt("Por favor ingresa tu edad correctamente (solo números) y debe ser mayor de 18 años"));
    }

    return edad;
};

// Llamando a las funciones para obtener el nombre y la edad del usuario
let nombre = validarNombre();
let edad = validarEdad();

console.log("El nombre ingresado es: ", nombre);
console.log("La eda ingresada es: ", edad);