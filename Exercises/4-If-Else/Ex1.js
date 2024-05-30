// If Else

// a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el
// valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than
// 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

var random = Math.random();
if (random >= 0.5) {
  alert(`${random} - Greater than 0.5`);
} else {
  alert(`${random} - Lower than 0.5`);
}

// b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y
// muestre los siguientes mensajes de alerta:
// i. “Bebe” si la edad es menor a 2 años;
// ii. “Niño” si la edad es entre 2 y 12 años;
// iii. “Adolescente” entre 13 y 19 años;
// iv. “Joven” entre 20 y 30 años;
// v. “Adulto” entre 31 y 60 años;
// vi. “Adulto mayor” entre 61 y 75 años;
// vii. “Anciano” si es mayor a 75 años.

var age = Math.floor(Math.random() * 100);
if (age < 2) {
  alert(`${age} años - Bebe`);
}
if (age >= 2 && age <= 12) {
  alert(`${age} años - Niño`);
}
if (age >= 13 && age <= 19) {
  alert(`${age} años - Adolescente`);
}
if (age >= 20 && age <= 30) {
  alert(`${age} años - Joven`);
}
if (age >= 31 && age <= 60) {
  alert(`${age} años - Adulto`);
}
if (age >= 61 && age <= 75) {
  alert(`${age} años - Adulto mayor`);
}
if (age > 75) {
  alert(`${age} años - Anciano`);
}
