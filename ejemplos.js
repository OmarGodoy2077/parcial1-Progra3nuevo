// Array.from() crea un nuevo array a partir de un objeto iterable.

// Ejemplo 1: Crear un array a partir de una cadena
const cadena = "Hola mundo";
const arrayDeCadena = Array.from(cadena);
console.log(arrayDeCadena); // ["H", "o", "l", "a", " ", "m", "u", "n", "d", "o"]

// Ejemplo 2: Crear un array a partir de un objeto iterable
const numeros = [1, 2, 3, 4, 5];
const arrayDeNumeros = Array.from(numeros);
console.log(arrayDeNumeros); // [1, 2, 3, 4, 5]

// Ejemplo 3: Crear un array a partir de un objeto con una propiedad length
const objeto = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};
const arrayDeObjeto = Array.from(objeto);
console.log(arrayDeObjeto); // ["a", "b", "c"]

// Ejemplo 4: Usar un mapFunction para transformar los elementos del array
const arrayDeNumerosPares = Array.from(numeros, (numero) => numero * 2);
console.log(arrayDeNumerosPares); // [2, 4, 6, 8, 10]

// Array.of() crea un nuevo array con los elementos especificados como argumentos.

// Ejemplo 1: Crear un array con tres elementos
const arrayNumeros = Array.of(1, 2, 3);
console.log(arrayNumeros); // [1, 2, 3]

// Ejemplo 2: Crear un array con un solo elemento
const arrayCadena = Array.of("Hola");
console.log(arrayCadena); // ["Hola"]

// Ejemplo 3: Crear un array vacío
const arrayVacio = Array.of();
console.log(arrayVacio); // []

// Ejemplo 4: Crear un array con valores nulos
const arrayNulos = Array.of(null, null, null);
console.log(arrayNulos); // [null, null, null]

// Ejemplo 5: Crear un array a partir de un array existente
const arrayOriginal = [1, 2, 3];
const arrayCopia = Array.of(...arrayOriginal);
console.log(arrayCopia); // [1, 2, 3]
// Ejemplo 1: Concatenar dos arrays
const arrayColores = ["Rojo", "Verde", "Azul"];
const arrayFrutas = ["Manzana", "Plátano", "Naranja"];
const arrayConcatenado = arrayColores.concat(arrayFrutas);
console.log(arrayConcatenado); // ["Rojo", "Verde", "Azul", "Manzana", "Plátano", "Naranja"]

// Ejemplo 2: Concatenar un array con un valor
const arrayNumeros = [1, 2, 3];
const numero = 4;
const arrayConcatenado2 = arrayNumeros.concat(numero);
console.log(arrayConcatenado2); // [1, 2, 3, 4]

// Ejemplo 1: Extraer una sección de un array
const frutas = ["Manzana", "Plátano", "Naranja", "Pera", "Fresa"];
const frutasExtraidas = frutas.slice(1, 3);
console.log(frutasExtraidas); // ["Plátano", "Naranja"]

// Ejemplo 2: Extraer desde el principio hasta un índice específico
const primerasFrutas = frutas.slice(0, 2);
console.log(primerasFrutas); // ["Manzana", "Plátano"]

// Ejemplo 3: Extraer desde un índice específico hasta el final
const ultimasFrutas = frutas.slice(3);
console.log(ultimasFrutas); // ["Pera", "Fresa"]
// Ejemplo 1: Imprimir cada elemento de un array
const frutas = ["Manzana", "Plátano", "Naranja", "Pera", "Fresa"];
frutas.forEach((fruta) => {
  console.log(fruta);
});

// Ejemplo 2: Sumar todos los elementos de un array
const numeros = [1, 2, 3, 4, 5];
let suma = 0;
numeros.forEach((numero) => {
  suma += numero;
});
console.log(suma); // 15
// Agregar un elemento al final del arreglo
arreglo.push(4);

console.log(arreglo); // Resultado: [1, 2, 3, 4]

// Agregar múltiples elementos al final del arreglo
arreglo.push(5, 6);

console.log(arreglo); // Resultado: [1, 2, 3, 4, 5, 6]
// Ejemplo 1: Agregar un elemento al final de un array
const frutas = ["Manzana", "Plátano", "Naranja"];
frutas.push("Pera");
console.log(frutas); // ["Manzana", "Plátano", "Naranja", "Pera"]

// Ejemplo 2: Agregar varios elementos al final de un array
frutas.push("Fresa", "Kiwi");
console.log(frutas); // ["Manzana", "Plátano", "Naranja", "Pera", "Fresa", "Kiwi"]
// Ejemplo 1: Eliminar el último elemento de un array
const frutas = ["Manzana", "Plátano", "Naranja", "Pera", "Fresa"];
const frutaEliminada = frutas.pop();
console.log(frutas); // ["Manzana", "Plátano", "Naranja", "Pera"]
console.log(frutaEliminada); // "Fresa"

// Ejemplo 2: Eliminar varios elementos del final de un array
for (let i = 0; i < 2; i++) {
  frutas.pop();
}
console.log(frutas); // ["Manzana", "Plátano"]

// Ejemplo 1: Obtener el elemento en el índice 2
const frutas = ["Manzana", "Plátano", "Naranja", "Pera", "Fresa"];
const fruta = frutas.at(2);
console.log(fruta); // "Naranja"

// Ejemplo 2: Obtener el elemento en el índice -2 (segundo desde el final)
const fruta2 = frutas.at(-2);
console.log(fruta2); // "Pera"

// Ejemplo 3: Obtener el elemento en un índice que está fuera de los límites
const fruta3 = frutas.at(10);
console.log(fruta3); // undefined
// Ejemplo 1: Invertir el orden de un array
const frutas = ["Manzana", "Plátano", "Naranja", "Pera", "Fresa"];
frutas.reverse();
console.log(frutas); // ["Fresa", "Pera", "Naranja", "Plátano", "Manzana"]

// Ejemplo 2: Invertir el orden de un array y luego volver a invertirlo
frutas.reverse();
console.log(frutas); // ["Manzana", "Plátano", "Naranja", "Pera", "Fresa"]
// Ejemplo 1: Comprobar si un valor existe en un array
const frutas = ["Manzana", "Plátano", "Naranja", "Pera", "Fresa"];
const contieneManzana = frutas.includes("Manzana");
console.log(contieneManzana); // true

// Ejemplo 2: Comprobar si un valor no existe en un array
const contieneKiwi = frutas.includes("Kiwi");
console.log(contieneKiwi); // false
// Ejemplo 1: Filtrar los números pares de un array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // [2, 4, 6, 8, 10]

// Ejemplo 2: Filtrar las frutas que comienzan con la letra "M"
const frutas = ["Manzana", "Plátano", "Naranja", "Pera", "Fresa", "Melón"];
const frutasConM = frutas.filter((fruta) => fruta.charAt(0) === "M");
console.log(frutasConM); // ["Manzana", "Melón"]
// Ejemplo 1: Eliminar el primer elemento de un array
const frutas = ["Manzana", "Plátano", "Naranja", "Pera", "Fresa"];
const frutaEliminada = frutas.shift();
console.log(frutas); // ["Plátano", "Naranja", "Pera", "Fresa"]
console.log(frutaEliminada); // "Manzana"

// Ejemplo 2: Eliminar varios elementos del principio de un array
for (let i = 0; i < 2; i++) {
  frutas.shift();
}
console.log(frutas); // ["Pera", "Fresa"]
// Ejemplo 1: Agregar un elemento al principio del array
const frutas = ["Plátano", "Naranja", "Pera", "Fresa"];
frutas.unshift("Manzana");
console.log(frutas); // ["Manzana", "Plátano", "Naranja", "Pera", "Fresa"]

// Ejemplo 2: Agregar varios elementos al principio del array
frutas.unshift("Kiwi", "Uva");
console.log(frutas); // ["Kiwi", "Uva", "Manzana", "Plátano", "Naranja", "Pera", "Fresa"]
// Ejemplo 1: Ordenar un array de números en orden ascendente
const numeros = [1, 5, 3, 2, 4];
numeros.sort();
console.log(numeros); // [1, 2, 3, 4, 5]

// Ejemplo 2: Ordenar un array de strings en orden descendente
const frutas = ["Manzana", "Plátano", "Naranja", "Pera", "Fresa"];
frutas.sort((a, b) => b.localeCompare(a));
console.log(frutas); // ["Pera", "Plátano", "Manzana", "Naranja", "Fresa"]
// Ejemplo 1: Buscar la posición de un elemento en un array
const frutas = ["Manzana", "Plátano", "Naranja", "Pera", "Fresa"];
const indiceManzana = frutas.indexOf("Manzana");
console.log(indiceManzana); // 0

// Ejemplo 2: Buscar la posición de un elemento que no existe en un array
const indiceKiwi = frutas.indexOf("Kiwi");
console.log(indiceKiwi); // -1

fsdfdsfsd
// Ejemplo 1: Crear un array a partir de una cadena

fsdfdsfsd
const cadena = "Hola mundo";
cadena.split("");

frutas.forEach((fruta) => {
  console.log(fruta);
});
