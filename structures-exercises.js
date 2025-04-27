/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = [5]
animales = ["pez", "tigre","perro","gato"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final

animales = ["pez", "tigre","perro","gato","elefante"]
animales[0] = "avispa"
animales[5] = "leon"

console.log(animales)
// 3. Elimina el que se encuentra en tercera posición
animales.splice(3,1)
console.log(animales)
// 4. Crea un set que almacene cinco libros
let set1 = new Set()
set1 = new Set(["libro 1","libro 2","libro 3","libro 4","libro 5"])

// 5. Añade dos más. Uno de ellos repetido
 
set1.add("libro 6")
set1.add("libro 7")
console.log(set1)
// 6. Elimina uno concreto a tu elección

set1.delete("libro 1")
console.log(set1) 

// 7. Crea un mapa que asocie el número del mes a su nombre
let map1  = new Map()
console.log(map1)
 map1  = new Map([
    ["mes 1","Enero"],["mes 2","Febrero"],["mes 3","Marzo"],["mes 4","Abril"],["mes 5","Mayo"],["mes 6","Junio"],
    ["mes 7","Julio"],["mes 8","Agosto"],["mes 9","Septiembre"] ,["mes 10","Ocutubre"], ["mes 11","Noviembre"],
    ["mes 12","Diciembre"]


])
console.log(map1)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

    console.log(map1.get("mes 5"))



// 9. Añade al mapa una clave con un array que almacene los meses de verano

    map1.set("meses verano", ["junio", "julio","agosto"])

    console.log(map1.get("meses verano"))
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let dia = ["lunes","martes"]
let set2= new Set(dia)

let map3 = new Map()
//almacenar el set que esta en el map

map3.set("dias", set2)

console.log(map3.get("dias"))