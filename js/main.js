// Expresión regular para validar el formato del email
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Función para validar el email
const validarEmail = () => {
    const emailInput = document.getElementById("emailInput");
    const enviarBtn = document.getElementById("enviarBtn");
    const emailError = document.getElementById("emailError"); 

    const validarFormatoEmail = (email) => {
        const isValidEmail = emailRegExp.test(email);
        emailError.textContent = isValidEmail ? "" : "El formato del email no es válido";
        enviarBtn.disabled = !isValidEmail;
        return isValidEmail;
    };

    emailInput.addEventListener("input", () => {
        const email = emailInput.value.trim();
        validarFormatoEmail(email);
    });

    enviarBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();
        if (validarFormatoEmail(email)) {
            localStorage.setItem("email", email);
            console.log("El email ingresado es:", email);
        }
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





// Función para realizar la solicitud Fetch
const fetchData = () => {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
        })
        .catch(error => {
            Swal.fire({
                title: "Error",
                text: "Ha ocurrido un error",
                icon: "error"
            });
            console.error('Hubo un problema', error);
        });
};

// Asegurarse de que se ejecute después de que se haya cargado el DOM
document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    
    fetchButton.addEventListener('click', () => {
        fetchData();
    });
});
