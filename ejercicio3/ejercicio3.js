
import { crearLibro, mostrarLibro } from './operaciones/index.js';

let miLibro = crearLibro(
    "Cien Años de Soledad",
    "Gabriel García Márquez",
    1967,
    "Realismo Mágico"
);


console.log("Información del libro:");
mostrarLibro(miLibro);
