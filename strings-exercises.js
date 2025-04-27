/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let myCity = "A Coruña"
let greeting = "Vivo en " + myCity

console.log(greeting)

// 2. Muestra la longitud de una cadena de texto

console.log(greeting.length)

// 3. Muestra el primer y último carácter de un string

console.log(greeting[0])
console.log(greeting[15])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let alert =`Cuidado, los 
nombres con
los nombres de las
variables`
console.log(alert)

// 6. Interpola el valor de una variable en un string
let month = "abril"
let calendar = `La semana santa se celebra en el mes de ${month}`

console.log(calendar)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let dia = calendar.replaceAll(" ","-")
console.log(dia)

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(calendar.includes("semana"))

// 9. Comprueba si dos strings son iguales

console.log(month == calendar)

// // 10. Comprueba si dos strings tienen la misma longitud

console.log(month.length == calendar.length)