const readline = require('readline-sync');

const registroEstudiante = () => {
  let cantidad = readline.question("Cantidad de estudiantes a registrar: ")
  const estudiantes = [];

  for (let i=1; i<=cantidad; i++) {
    let nombre = readline.question(`ID:${i}, Nombre y Apellido del estudiante: `);
    let edad = readline.question(`Edad del estudiante: `);

    let estudiante = {
      id: i,
      nombre: nombre,
      edad: edad
    }
    estudiantes.push(estudiante);
  }
  return estudiantes;
};

// funcion adicional:
function listEstudiantes(estudiantes){
  console.log("\n------ Lista de todos los estudiantes registrados ------")
  for (let i in estudiantes) {
    console.log(`id: ${estudiantes[i].id}\n Estudiante: ${estudiantes[i].nombre}\n Edad = ${estudiantes[i].edad} años\n`);
  }
};

// Exportar Modulos:
module.exports = {
    registroEstudiante, 
    listEstudiantes
};