
// Recorra el arreglo utilizando for of y escriba los valores.




export default function arreglo_usando_for_of(numeros) {
    console.log("Recorrer el arreglo usando for of:");
    for (let numero of numeros) {
        console.log(numero);
    }
    return numeros;
}