


let utiles = [
    "lapicero",
    "cartuchera",
    "borrador",
    "sacapuntas"
]


import promptSync from 'prompt-sync';
const prompt = promptSync();
utiles.procesador = prompt("Ingrese el nombre del lapicero: ");
utiles.memoria = prompt("Ingrese el nombre de la cartuchera: ");
utiles.disco_duro = prompt("Ingrese el nombre del borrador: ");
utiles.sistema_operativo = prompt("Ingrese el nombre del sacapuntas: ");





// cuando es mas ultil usar el for
// El ciclo for es más útil cuando necesitamos acceder a la posición de los elementos de un 
// arreglo
for (let i = 0; i < utiles.length; i++) {
    console.log("En la posicion " + i, "se encuentra el valor de:" + utiles[i])
}


// cuando es mas util for .. of
// es mas util cuando solo necesitamos acceder alos valores de los elementos de un arreglo sin preoucparse por la posicion 
console.log("Los valores son: ");
for (let i of utiles) {
    console.log(i);
}




