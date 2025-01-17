/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let a = 5
let b = 10

let suma = a + b
let resta = a - b
let multiplicacion = a * b
let division = a / b
let modulo = a % b
let exponente = a ** b

console.log("Suma: ", suma)
console.log("Reste: ", resta)
console.log("Multiplicación: ", multiplicacion)
console.log("División: ", division)
console.log("Modulo: ", modulo)
console.log("Exponente: ", exponente)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let asignacion = 3
let sumaAsignacion = asignacion += 2
let restaAsignacion = asignacion -= 2
let multiplicacionAsignacion = asignacion *= 2
let divisionAsignacion = asignacion /= 2
let moduloAsignacion = asignacion %= 2
let exponenteAsignacion = asignacion **= 2

console.log("Suma con asignación: ", sumaAsignacion)
console.log("Resta con asignación: ", restaAsignacion)
console.log("Multiplicación con asignación: ", multiplicacionAsignacion)
console.log("División con asignación: ", divisionAsignacion)
console.log("Modulo con asignación: ", moduloAsignacion)
console.log("Exponente con asignación: ", exponenteAsignacion)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 3)
console.log(56 > 32)
console.log(85 == 85)
console.log(1 == true)
console.log(10 >= 10)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 < 3)
console.log(56 < 32)
console.log(85 == 32)
console.log(0 == true)
console.log(10 >= 11)

// 5. Utiliza el operador lógico and

console.log(65 > 10 && 1 < 10)

// 6. Utiliza el operador lógico or

console.log(12 == 11 || 15 == 15)

// 7. Combina ambos operadores lógicos

console.log(12 == 11 && 15 == 15 || 15 > 10)

// 8. Añade alguna negación

console.log(!(85 == 84 || 15 < 10))

// 9. Utiliza el operador ternario

const terna = true
terna ? console.log("Verdadero") : console.log("Falso")

// 10. Combina operadores aritméticos, de comparáción y lógicas

let c = 8
let d = 9
let e = 9

let resultado = (c < d == e) && (c == d) || (d > c)

console.log("Resultado: ", resultado)