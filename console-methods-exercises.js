/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

function dividir(a, b) {
    try {
        if (b === 0) throw 'No se puede dividir entre 0';
        return a / b;
    } catch (error) {
        console.error(error);
    }
}
console.log(dividir(10, 2));  
console.log(dividir(10, 0));
// 2. Crea una función que utilice warn correctamente
    function verificarEdad(edad) {
        if (edad < 18) {
            console.warn('Advertencia: Eres menor de edad');
        } else {
            console.log('Acceso permitido');
        }
    }
    verificarEdad(16);  
    verificarEdad(20); 
// 3. Crea una función que utilice info correctamente

    function mostrarInfo(nombre, edad) {
        console.info(`Nombre: ${nombre}, Edad: ${edad}`);
        mostrarInfo('pau', 37);  
    }

// 4. Utiliza table
let data = [
    ["paula", 27],
    ["ivan", 27]
]
console.table(data)

// 5. Utiliza group

console.group("Usuario")
console.log("Nombre: Paula")
console.log("Edad: 25")
console.groupEnd()

// 6. Utiliza time

console.time("tiempo de ejecucion")

for(let i =0; i<10; i++){

}
console.timeEnd("tiempo de ejecucion")



// 7. Valida con assert si un número es positivo

let age = 17
console.assert(age>=18, "El usuario tiene que ser mayor de edad")

// 8. Utiliza count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// 9. Utiliza trace
function funcA(){
    funcB()
}
function funcB(){
    console.trace("Seguimiento de la ejecución")
}
funcA()
// 10. Utiliza clear
    console.clear()
