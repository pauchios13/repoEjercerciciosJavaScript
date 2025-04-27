/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

        let familia = ["abuela", "madre", "hija","hermana"]
        let[primerFamilar,segundoFamiliar] = familia
        console.log(primerFamilar)
        console.log(segundoFamiliar)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

        let ciudades = ["coruña", "madrid", "bilbao"]
        let[primeraCiudad,segundoCiudad, terceraCiudad, cuartaCiudad="barcelona"] = ciudades
        console.log(primeraCiudad)
        console.log(segundoCiudad)
        console.log(terceraCiudad)
        console.log(cuartaCiudad)


// 3. Usa desestructuración para extraer dos propiedades de un objeto
    let animal ={
        tipo : "perro",
        color: "marron"
    }
    let{tipo, color} = animal
    console.log(tipo)
    console.log(color)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
    let persona = { 
        nombre: "juan ",
        apellidos: "sanchez",
        direccion1: {
            localizacion: "barcelona",
            pais: "España"
        }
    }
    let{nombre : nombrePersona, apellidos: apellidosPersona} = persona
    console.log(nombrePersona)
    console.log(apellidosPersona)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

    let {nombre,direccion1:{localizacion,pais}} = persona
    console.log(nombre)
    console.log(localizacion)
    console.log(pais)

// 7. Usa propagación para crear una copia de un array
    let myArray = [1, 2, 3, 4];
    let myarray1 = [...myArray, 5, 6];
    console.log(myarray1)
    let myArray2 = [...myArray];
    console.log(myArray2);
// 8. Usa propagación para combinar dos objetos en uno nuevo

    let myArray4 = { ...myArray, ...myarray1, ...myArray2 };

    console.log(myArray4)
// 9. Usa propagación para crear una copia de un objeto

    let person1 = {...persona}
    console.log(person1)
    
// 10. Combina desestructuración y propagación

    let persona2 = {nombre2:"pau", apellidosPersona2:"sanchez",edad:27, ciudad:"madrid"}

    let { nombre2, apellidosPersona2, ...resto} = persona2
    console.log(nombre)
    console.log(resto)