// Importacion de Bibliotecas:
const Chance = require('chance');

//creamos una instancia:
const chance = new Chance();

// generamos datos aleatorios:
const nombresRamdon = chance.name();
const edadRandom = chance.age();
const emailRandom = chance.email();

// Programa Principal:
console.log(`Nombre aleatorio: ${nombresRamdon}`);
console.log(`Edad aleatorio: ${edadRandom}`);
console.log(`Email aleatorio: ${emailRandom}`);


// ------------------------------------------------- //

// Exportacion de Modulos:
console.log("\n########## Exportacion Modulo ##########")
const {sumar, restar, multiplicar, dividir} = require('./calculadora');
const {registroEstudiante, listEstudiantes} = require('./estudiante');
const express = require('express');
const http = require('http');

// llamada a la función:
console.log(sumar(5,3));
console.log(restar(5,3));
console.log(multiplicar(4,2));
console.log(dividir(4,2));

console.log(" ");

// Actividad 2:
let estudiantes = registroEstudiante();
listEstudiantes(estudiantes);


// levantar un puerto: