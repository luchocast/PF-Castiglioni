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







// Creo lista de cursos a ofrecer (Array de objetos)

const cursos = [
    {nombre: 'Productividad Maestra', precio: '20.000', horas: '12hs', modulos: '8'},
    {nombre: 'Disciplina de Monje', precio: '30.000', horas: '10hs', modulos: '9'},
    {nombre: 'Lectura Proactiva', precio: '10.000', horas: '6hs', modulos: '6'},
    {nombre: 'Habilidades sociales', precio: '13.000', horas: '7hs', modulos: '4'}
];

// En caso de querer agregar cursos en un futuro (metodo push)

//cursos.push()

// Creo otro Array Objects para consultorias/mentorias
const consultorias = [
    {nombre: 'Protocolo Redes Sociales', precio: '200.000', duracion: '1 mes', llamadas: '1/week'},
    {nombre: 'Protocolo Marca personal', precio: '100.000', duracion: '1 mes', llamadas: '1/week'},
    {nombre: 'Protocolo Fisico Estetico', precio: '300.000', duracion: '2 mes', llamadas: '1/week'}
];

// En caso de querer eliminar consultorias en un futuro (metodo pop o splice)

//consultorias.splice()




// Itero sobre el Array de cursos
// Creo Variable que guarde la HOF (no hace falta return, ya que no hay {})

const cursoEncontrado = cursos.find((item) => item.nombre === 'Productividad Maestra');

// Output
if (cursoEncontrado) {
    console.table(cursoEncontrado);
} else {
    console.log("Curso no encontrado");
}



// Itero sobre el Array de consultoria
// Creo Variable que guarde la HOF

const consultoriaEncontrada= consultorias.some((item) => item.nombre==='Redes Sociales');


// Output
console.log("Consultoría 'Redes Sociales' encontrada:", consultoriaEncontrada);