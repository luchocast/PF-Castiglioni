// Uso RegExp para validar el formato del email
let emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Funcion para validar el email
let validarEmail = () => {
    let emailInput = document.getElementById("emailInput");
    let enviarBtn = document.getElementById("enviarBtn");
    let emailError = document.getElementById("emailError"); 

    emailInput.addEventListener("input", () => {
        // Uso .trim para limpiar la variable
        let email = emailInput.value.trim();

        // Valido usando operador ternario y lógico (AND, OR)
        emailError.textContent = emailRegExp.test(email) ? "" : "El formato del email no es válido";
        enviarBtn.disabled = !emailRegExp.test(email);
    });

    enviarBtn.addEventListener("click", () => {
        let email = emailInput.value.trim();
    
        // Uso operador ternario para verificar el formato del email
        let isValidEmail = emailRegExp.test(email);
    
        // Almaceno en localStorage si el formato es válido (tambien uso operadores avanzados para simplificar la estructura condicional)
        isValidEmail
            ? (localStorage.setItem("email", email), console.log("El email ingresado es: ", email))
            : (emailError.textContent = "El formato del email no es válido");
    });
};

// Llamo a la función para validar el email
validarEmail();




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