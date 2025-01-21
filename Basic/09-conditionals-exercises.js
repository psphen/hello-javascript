/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let name = "name"

if (name == "name") {
    console.log("Stephen")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Psphen"
let password = "123456789"

if (user == "Psphen" && password == "123456789") {
    console.log("Usuario y contraseña correctos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -1

if (number > 0) {
    console.log("El número es positivo")
} else if (number < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 15

if (age >= 18) {
    console.log("Puedes votar")
} else {
    console.log("Te faltan " + (18 - age) + " años para votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let ageNew = 18
let message = ageNew >= 18 ? "Adulto" : "Menor"
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = 2

if (month == 12 || month == 1 || month == 2) {
    console.log("La estacion del año es invierno")
} else if (month == 3 || month == 4 || month == 5) {
    console.log("La estacion del año es primavera")
} else if (month == 6 || month == 7 || month == 8) {
    console.log("La estacion del año es verano")
} else if (month == 9 || month == 10 || month == 11) {
    console.log("La estacion del año es otoño")
} else {
    console.log("No es un mes válido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    console.log("31 días")
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("30 días")
} else if (month == 2) {
    console.log("28 días")
} else {
    console.log("No es un mes válido")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "en"

switch (language) {
    case "es":
        console.log("Hola")
        break
    case "en":
        console.log("Hello")
        break
    case "br":
        console.log("Olá")
        break
    default:
        console.log("No es un idioma válido")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let monthNew = 3
switch (monthNew) {
    case 12:
    case 1:
    case 2:
        console.log("La estacion del año es invierno")
        break
    case 3:
    case 4:
    case 5:
        console.log("La estacion del año es primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("La estacion del año es verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("La estacion del año es otoño")
        break
    default:
        console.log("No es un mes válido")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let newMonth = 3
switch (newMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 días")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 días")
        break
    case 2:
        console.log("28 días")
        break
    default:
        console.log("No es un mes válido")
}