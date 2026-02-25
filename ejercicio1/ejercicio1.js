

import {agregar_al_final, agregar_elemento_al_inicio, cuantos_elementos_de_un_arreglo , eliminar_el_primer_elemento , eliminar_ultimo_elemento  } from './operaciones/index.js';


let frutas = [
    "Manzana", 
    "Pera", 
    "Banano"
];

console.log("Fruta agregada al final: ", agregar_al_final(frutas));
console.log("Fruta eliminada al final: ", eliminar_ultimo_elemento(frutas));
console.log("Fruta agregada al inicio: ", agregar_elemento_al_inicio(frutas));
console.log("Fruta eliminada al inicio: ", eliminar_el_primer_elemento(frutas));
console.log("Cantidad de frutas: ", cuantos_elementos_de_un_arreglo(frutas));