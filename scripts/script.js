console.log("Hoja de Vida Interactiva Cargada");


//Constantes y variables 
const certificaciones = ["1.Curso: Fundamentos de Bases de Datos Oracle", "2 Curso:Diseño de Bases de datos Oracle", "3.Curso: Fundamentosd de Java", "4:Curso de Habilidades Blandas","5.Gestion del Talento Humano"];

// document.getElementById('addSkill').addEventListener('click', function() {
//       // Obtener valores para las columnas
//       var valorColumna1 = prompt("Ingrese el valor para la Habilidad:");
//     var valorColumna2 = prompt("Ingrese el valor para el nivel de la habilidad:");

//     // Obtener la referencia de la tabla
//     var tabla = document.getElementById("miTabla");

//     // Crear una nueva fila
//     var fila = tabla.insertRow();

//     // Insertar celdas en la fila
//     var celda1 = fila.insertCell(0);
//     var celda2 = fila.insertCell(1);

//     // Asignar valores a las celdas
//     celda1.innerHTML = valorColumna1;
//     celda2.innerHTML = valorColumna2;

// });


// function añadirHabilidad() {
//     let newSkill = prompt("Introduce una nueva habilidad:");
//     if (newSkill) {
//         let ul = document.getElementById('skillsList');
//         let li = document.createElement('li');
//         li.textContent = newSkill;
//         ul.appendChild(li);
//     }
// }
// document.getElementById('addSkill').addEventListener('click', añadirHabilidad);




function añadirHabilidad() {
   
    let valorColumna1 = prompt("Ingrese el valor para la Habilidad:");
    let valorColumna2 = prompt("Ingrese el valor para el nivel de la habilidad:");
    if (valorColumna1) {
        let tabla = document.getElementById("miTabla");
        let fila = tabla.insertRow();
        let celda1 = fila.insertCell(0);
        let celda2 = fila.insertCell(1);
        celda1.innerHTML = valorColumna1;
        celda2.innerHTML = valorColumna2;
    }
}
document.getElementById('addSkill').addEventListener('click', añadirHabilidad);



document.getElementById('contactar').addEventListener('click', function() {
    let email = document.getElementById('email').value;
    alert(email + " me pondre en contacto contigo pronto");
});


function mostrarCertificaciones() {
    let ul = document.getElementById('listaCertificaciones'); // Suponiendo que tienes un <ul id="listaCertificaciones"> en tu HTML
    
    for (let i = 0; i < certificaciones.length; i++) {
        let li = document.createElement('li');
        li.textContent = certificaciones[i];
        ul.appendChild(li);
    }
}


const saludoPersonalizado = () => {
    alert("¡Gracias por visitar mi Hoja de vida interactiva!");
}


const calificarHojaDeVida = () => {
    let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");
    alert(`¡Gracias por calificar con un ${calificacion}!`);
}

document.getElementById('calificacion').addEventListener('click', calificarHojaDeVida);

window.onload = mostrarCertificaciones;
window.onload = saludoPersonalizado;



