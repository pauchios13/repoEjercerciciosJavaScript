/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

    function suma(num1, num2){
        console.log(num1+num2)
    }
    suma(3,5)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

    function numMayor(numeros){
        let max = numeros[0]
        for(let i = 1; i<numeros.length; i++){
            if(numeros[i]> max){
                max= numeros[i]
            }
        }
        return max
    }
    let numeros = [1,3,7,13,2,5,11]
    console.log(numMayor(numeros))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function contadorVocales( frase){

    let vocales="aeiou"
    let contador = 0
    for(let vocal of frase){
        if(vocales.includes(vocal)){
            contador++
        }
    }
    console.log(contador)
}
contadorVocales("buenos dias")

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

    function convertirMayus(cadenas){
        let resultado = []
        for(let i = 0; i<cadenas.length; i++){
            resultado.push(cadenas[i].toUpperCase())
        }
        return resultado;
    }
    let cadenas = ["perro","gato","delfin"]
    console.log(convertirMayus(cadenas))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
    function numPrimo(numero){
    if (numero<=1){
        return false
    }

    for(let i = 2; i<numero; i++){
        if(numero% i === 0 ){
            return false
        }
    }
            return true;
    }

    console.log(numPrimo(5))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
    function buscarElementoComun(array1, array2){
        let elementoComun = []

        for(let i = 0;  i<array1.length; i++){
            if(array2.includes(array1[i])){
                elementoComun.push(array1[i])
            }              
        }
        return elementoComun
    }   
    let array1= [1,2,3,4,5,6,7]
    let array2= [5,6,3,8,9,6,10]

    let resultado3 = buscarElementoComun(array1,array2);
    console.log(resultado3)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(arrayNumeros){

    let suma = 0

    for(let i=0; i < arrayNumeros.length; i++){
        if(arrayNumeros[i] % 2 === 0){
            suma += arrayNumeros[i]
        }
        }
        return suma
    }
        let arrayNumeros =[1,2,3,4,5,6,7]
        let resultado2 = sumaPares(arrayNumeros)
        console.log(resultado2)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
    function numerosAlCuadrado(arrayDeNumeros){
        let resultado = []
        for(let i=0; i<arrayDeNumeros.length; i++){
            resultado.push(arrayDeNumeros[i]* arrayDeNumeros[i]) 
        }
        return resultado
    }
    let numerosCuadrado = [1,2,3,4,5,6]
    let resultadoCuadrado = numerosAlCuadrado(numerosCuadrado)
    console.log(resultadoCuadrado)
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function cadenaInvertida(cadena){
    let palabras = cadena.split(' ')
    let palabrasInvertidas = palabras.reverse()
    let resultado = palabrasInvertidas.join(' ')
    return resultado
}
    let cadena = "vivo en A Coruña"
    let resultado = cadenaInvertida(cadena)
    console.log(resultado)

// 10. Crea una función que calcule el factorial de un número dado
function calculoFactorial(numero){


    let resultado = 1
    for(let i = 1; i<=numero; i++){
        resultado *=i
    }
    return resultado
}
console.log(calculoFactorial(6))