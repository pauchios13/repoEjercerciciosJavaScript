/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades y 
// 2. Añade un método a la clase que utilice las propiedades

class Person{
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    programar(){
        console.log(`${this.nombre}, con ${this.edad} años, esta programando`)
    }
}


// 3. Muestra los valores de las propiedades e invoca a la función
    let person = {
        nombre : "Paula",
        edad : 26
    }
    let paula = new Person(person.nombre,person.edad)
    console.log(person.nombre)
    console.log(person.edad)
    paula.programar()

// 4. Añade un método estático a la primera clase
class Person1{
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    programar(){
        console.log(`${this.nombre}, con ${this.edad} años, esta programando`)
    }
    static estudiar(){
        console.log("estudie DAM")
    }
}

// 5. Haz uso del método estático
    Person1.estudiar()
// 6. Crea una clase que haga uso de herencia

    class Programadora extends Person1{
        constructor(nombre,edad,lenguaje ){
            super(nombre, edad)
            this.lenguaje = lenguaje
        }
        programar(){
            console.log(`${this.nombre} esta trabajando en una empresa con ${this.lenguaje}`)
        }
    }
   let persona1 = new Programadora("Leti",12,"Java")
   console.log(persona1)
   
// 7. Crea una clase que haga uso de getters y setters
class GetPerson{
    #nombre
    #usuario
    #edad
    

constructor(nombre, usuario, edad){
    this.#nombre = nombre
    this.#usuario = usuario
    this.#edad = edad
}

get nombre(){
    return this.#nombre
}
get usuario(){
    return this.#usuario
}
get edad(){
    return this.#edad
}
set nombre(nuevoNombre){
    this.#nombre = nuevoNombre
}
set usuario(nuevoUsuario){
    this.#usuario = nuevoUsuario
}
set edad(nuevaEdad){
    this.#edad = nuevaEdad
}
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
personaGet = new GetPerson("Paula","Paulitti", 22)
console.log(personaGet.nombre)
console.log(personaGet.usuario)
console.log(personaGet.edad)

personaGet.nombre = "lucia"
personaGet.usuario = "lucitti"
personaGet.edad = "23"




// 9. Utiliza los get y set y muestra sus valores

console.log(personaGet.nombre)
console.log(personaGet.usuario)
console.log(personaGet.edad)
// 10. Sobrescribe un método de una clase que utilice herencia 

let programadora1 = new Programadora("Pauli",27,"Java Script")
programadora1.programar()