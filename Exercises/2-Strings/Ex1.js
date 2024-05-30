// 2. Strings

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
// texto en mayúscula (utilizar toUpperCase).
var string = "hola mundo";
console.log(string.toUpperCase());

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los primeros 5 caracteres guardando el resultado en una nueva
// variable (utilizar substring).
var string2 = "hola mundo";
console.log(string2.substring(0, 5));

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los últimos 3 caracteres guardando el resultado en una nueva variable
// (utilizar substring).
var string3 = "hola mundo";
console.log(string3.substring(string3.length - 3));

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con la primera letra en mayúscula y las demás en minúscula. Guardar el
// resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
// el operador +).
var string4 = "hola mundo";
var firstLetter = string4.substring(0, 1).toUpperCase();
var rest = string4.substring(1).toLowerCase();

console.log(firstLetter + rest);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
// blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
// variable (utilizar indexOf).
var string5 = "hola mundo";
var space = string5.indexOf(" ");
console.log(space);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
// algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
// generar un nuevo string que tenga la primera letra de ambas palabras en
// mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
// toUpperCase, toLowerCase y el operador +).
var string6 = "hola mundo";
var space2 = string6.indexOf(" ");
var firstLetter2 = string6.substring(0, 1).toUpperCase();
var rest2 = string6.substring(1, space2).toLowerCase();
var firstLetter3 = string6.substring(space2 + 1, space2 + 2).toUpperCase();
var rest3 = string6.substring(space2 + 2).toLowerCase();

console.log(firstLetter2 + rest2 + " " + firstLetter3 + rest3);
