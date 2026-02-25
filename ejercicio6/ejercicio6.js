let computador = {
    procesador: "",
    memoria: "" ,
    disco_duro: "",
    sistema_operativo: "",

};
// valores del objeto
import promptSync from 'prompt-sync';
const prompt = promptSync();
computador.procesador = prompt("Ingrese el procesador: ");
computador.memoria = prompt("Ingrese la memoria: ");
computador.disco_duro = prompt("Ingrese el disco duro: ");
computador.sistema_operativo = prompt("Ingrese el sistema operativo: ");

// for cuando necesitamos acceder a las llaves de un objeto
for (let llave in computador){
    // computador[llave] es igual a "valor"
    console.log(llave + ": " + computador[llave]);
}   

// ¿Por qué un objeto representa mejor a ese elemento que un arreglo?
// Un objeto representa mejor a ese elemento que un arreglo porque un objeto nos permite 
// almacenar información de manera estructurada y con etiquetas (llaves) que describen cada dato, 
// mientras que un arreglo solo nos permite almacenar una lista de valores sin etiquetas. 
// En el caso de un computador,
//  es más fácil entender y acceder a sus características
//  (procesador, memoria, disco duro, sistema operativo) 
// utilizando un objeto, ya que cada característica tiene 
// un nombre específico que la identifica claramente. 
// En cambio, si usáramos un arreglo, tendríamos que recordar el orden de los elementos 
// para saber qué representa cada uno, lo cual puede ser confuso y propenso a errores.