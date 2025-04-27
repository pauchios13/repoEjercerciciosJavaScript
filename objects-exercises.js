/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let casa ={
    ciudad : "A Coruña",
    codigoPostal : "15002",
    barrio : "Monte Alto"
}
// 2. Accede y muestra su valor
    console.log(casa.ciudad)
    console.log(casa.codigoPostal)
    console.log(casa.barrio)
// 3. Agrega una nueva propiedad

    casa.pais = "España"
    console.log(casa)
// 4. Elimina una de las 3 primeras propiedades
    delete casa.ciudad
    delete casa.codigoPostal
    console.log(casa)
    
// 5. Agrega una función e invócala
    let casa2 ={
        ciudad : "A Coruña",
        codigoPostal : "15002",
        barrio : "Monte Alto",
        visitar: function(){
            console.log("es una ciudad bonita para visitar")
        }
    }
    casa2.visitar()
// 6. Itera las propiedades del objeto

    for(let propiedad in casa2){
        console.log(`${propiedad}`)
    }
// 7. Crea un objeto anidado

let casa3 = {
    ciudad : "madrid",
    direccion : {
        edificio : 1,
        calle : "calle Serrano"
    }
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(casa3.direccion.edificio)
console.log(casa3.direccion.calle)
// 9. Comprueba si los dos objetos creados son iguales
console.log(casa == casa2)
// 9. Comprueba si los dos objetos creados son iguales
console.log(casa == casa2)
// 10. Comprueba si dos propiedades diferentes son iguales    
 console.log(casa === casa2)