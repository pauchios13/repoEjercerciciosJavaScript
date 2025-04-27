/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
    for(let i=0; i<20; i++ ){
        console.log(i+1)
    }
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

for(let i= 0; i<100; i++){
    console.log(i+1)
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(let i= 0; i<50; i+=2){
    console.log(i)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["paula","juan"]
for(let i =0; i<nombres.length; i++){
    console.log(nombres[i])
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = "hola que tal"
let vocales = "aeiou"
let contadorVocales = 0;
for(let vocals of texto){
    if(vocales.includes)
    contadorVocales ++
}
console.log(contadorVocales)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
    let numeros =[1,2,3,4]
    let producto =1

    for(let i=0; i<numeros.length; i++){
        producto*=numeros[i]
    }
    console.log(producto)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for(let i= 1; i<=10; i++){
    console.log(i*5)
}
// 8. Usa un bucle para invertir una cadena de texto
let cadenaTexto = "java script"
let cadenaInvertida = ""

for(let i = cadenaTexto.length-1; i>=0; i--){
    cadenaInvertida+= cadenaTexto[i]
}
   console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

    let num = [0,1]

    for(let i =2; i<10; i++ ){
        num[i] = num[i - 1] + num[i - 2];   
    
    }
    console.log(num);
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numeros2 = [7,13,22,5,1,19,17,2,5]
let mayorque10 = []

for(let i=0; i<numeros2.length; i++){
    if(numeros2[i]>10){
        mayorque10.push(numeros2[i])
    }
}
console.log(mayorque10)