
// Cree un arreglo llamado verduras con al menos 4 elementos.

import { agregar_elemento_al_final, eliminar_ultimo_elemento, agregar_nuevo_elemento_al_inicio, cuantos_elementos_contiene,eliminar_primer_elemento } from "./operaciones/index.js";



let verduras = [
    "tomate",
    "lechuga",
    "calabaza",
    "brocoli"
];




console.log("el nuevo elemento al final es ", agregar_elemento_al_final(verduras));
console.log("eliminar el ultimo elemento del arreglo", eliminar_ultimo_elemento(verduras) );
console.log("agregar nuevo elemento al inicio", agregar_nuevo_elemento_al_inicio(verduras));
console.log("eliminar el primer elemento ", eliminar_primer_elemento(verduras));
console.log("cuantos elementos contiene el arreglo ", cuantos_elementos_contiene(verduras));