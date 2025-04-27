/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

    let a = 5
    let b = 10
  

    let suma = (a + b)
    let resta = (a - b)
    let multiplicacion = (a * b)
    let division = (a / b)
    let modulo = (a % b)
    let exponente = (a ** b)

    
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

    let variable1 = 2
    console.log(variable1)

    variable1 += 2
    console.log(variable1)

    variable1 -= 2
    
    variable1 *= 2
    console.log(variable1)

    variable1 /= 2
    console.log(variable1)

    variable1 %= 2
    console.log(variable1)
    variable1 **= 2
    console.log(variable1)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

    console.log(a < b)
    console.log(a <= b)
    console.log(a == 5)
    console.log(a !== 7)
    console.log(a !== "4")

   

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
    console.log(a > b)
    console.log(a >= b)
    console.log(a === "5")
    console.log(a === 6)
    console.log(a != 5)
// 5. Utiliza el operador lógico and

    console.log(200>10 && 400>40)

 // 6. Utiliza el operador lógico or

  console.log(2>10 || 54>40)

// 7. Combina ambos operadores lógicos
    console.log(2>10 && 54>40 || 15<30)

// 8. Añade alguna negación

console.log(!(5>10 && 4>40))
console.log(!(5>10 || 4>40))

// 9. Utiliza el operador ternario

isWalking = false;

isWalking ? console.log("esta caminando") : console.log("no camina")

// 10. Combina operadores aritméticos, de comparáción y lógicas

let operacion = (b-a >6) && (a*2 <=b) || (a*4 === 20)
console.log(operacion)