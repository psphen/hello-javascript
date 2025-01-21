/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let myName = "Stephen"
let age = 21
let presentation = "Mi nombres es " + myName + " y tengo " + age + " años"

console.log(presentation)
 
// 2. Muestra la longitud de una cadena de texto

console.log(presentation.length)

// 3. Muestra el primer y último carácter de un string

console.log(presentation[0])
console.log(presentation[36])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(presentation.toUpperCase())
console.log(presentation.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let message = `Este es
Un texto en
Varias lineas`

console.log(message)

// 6. Interpola el valor de una variable en un string

console.log(`Soy ${myName} y esto es una interpolación, y tengo ${age} años`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(presentation.replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(presentation.includes("años"))

// 9. Comprueba si dos strings son iguales

console.log(presentation === message)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(presentation.length === message.length)