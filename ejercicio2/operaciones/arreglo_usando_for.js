// Recorra el arreglo utilizando for y escriba los valores.


export default function arreglo_usando_for(numeros) {
    console.log("Recorrer el arreglo usando for:");
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i])
    }
    return numeros;
}