import promptSync from 'prompt-sync';
const prompt = promptSync();
// objetos
const cuadernos = {
    hoja: "",
    color: "",
    valor: "",
}
const teclados = {
    color: "",
    marca: "",
    valor: 0,
}
const audifonos = {
    marca: "",
    color: "",
    valor: 0,
    estado: "",
}
// un inventario de objetos
const inventario = [cuadernos,teclados,audifonos];
// llenar el inventario con datos del usuario
const llenar = (objeto) => {
    // for para llenar un objeto
    for (const key in objeto){
    console.log(objeto[key])
    // objeto[key] es igual a "valor"
    objeto[key] = prompt('ingrese algo para  : ' + key + ":")
    }
}
// for para llenar el inventario
for (let i = 0; i < inventario.length; i++) {
    // inventario[i] es igual a un objeto
    llenar(inventario[i])
}
// mostrar el inventario
console.log(inventario);
