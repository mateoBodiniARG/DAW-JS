// Funciones
// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
// dicha variable en la consola del navegador.
function suma(num1, num2) {
  return num1 + num2;
}
var result = suma(5, 10);
alert(`el resultado de la sumas es ${result}`)

// b. A la función suma anterior, agregarle una validación para controlar si alguno de
// los parámetros no es un número, mostrar una alerta aclarando que uno de los
// parámetros tiene error y retornar el valor NaN como resultado.
function suma(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert("Uno de los parámetros no es un número");
    return NaN;
  }
  return num1 + num2;
}
var result = suma(5, "hola");
console.log(result);

// c. Crear una función validate integer que reciba un número como parámetro y
// devuelva verdadero si es un número entero.
function validateInteger(num) {
  return Number.isInteger(num);
}
console.log(validateInteger(5.5));

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta con el
// error y retorna el número convertido a entero (redondeado).
function suma(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert("Uno de los parámetros no es un número");
    return NaN;
  }
  if (!validateInteger(num1) || !validateInteger(num2)) {
    alert("Uno de los números tiene decimales");
    return Math.round(num1) + Math.round(num2);
  }
  return num1 + num2;
}
var result = suma(5.5, 10);
console.log(result);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
// dentro de la función suma probando que todo siga funcionando igual.
function validateInteger(num) {
  return Number.isInteger(num);
}
