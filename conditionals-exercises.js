/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Paula"
        if(nombre == "Paula"){
            console.log(nombre)
        }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
    let usuario = "pauli"
    let pswd = 1234
    
    if(pswd == 1234 && usuario == "pauli"){
        console.log(pswd, usuario)
    }

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
    let num = 3

    if(num>0){
        console.log("num positivo")
    }else if(num<0){
        console.log("numero negativo")
    }else{
        console.log("el numero es 0")
    }
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan 
    let edad = 16
    if(edad>=18){
        console.log("puede votar")
    }else{
        let añosNecesarios = 18- edad
        console.log(`faltan ${añosNecesarios} años`)
    }
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
 
    let persona = edad >= 18 ? "adulto" : "menor" 
    console.log(`eres ${persona}`)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
    
    let mes = 4;
    
      if(mes>= 4 && mes<5){
        console.log("estas en primavera")
      }else if(mes>=6 && mes<8){
        console.log("estas en epoca de verano")
      }else if(mes>=9 && mes>11){
        console.log("estamos en epoca de otoño")
      }else if(mes===12 || mes===1 || mes===2){
        console.log("estamoos en poca de invierno")
      }

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
    console.log("Este mes tiene 31 días");
  } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    console.log("Este mes tiene 30 días");
  } else if (mes === 2) {
    console.log("Febrero tiene 28 días");
  } else {
    console.log("Mes no válido");
  }



// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma


let idiom = "frances"

switch(idiom){
    case "español":
        console.log("Hola")
        break;
    case "frances":
       console.log("Bonjour")
       break;
     case "ingles":
        console.log("Hello")
        break;
     case "italiana":
         console.log("Ciao")
         break;

}
// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch(mes){
    case 12:
    case 1:
    case 2:
    console.log("estacion invierno")
    break;
    case 3:
    case 4:
    case 5:
        console.log("estacion primavera")
    break;
    case 6:
    case 7:
    case 8:
        console.log("estacion verano")
    break;
    case 9:
    case 10:
    case 11:
    console.log("estacion otoño")
    break;
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch(mes){
    case 1:
        console.log("Este mes tiene 31 días");
        break;
    case 2:
        console.log("Este mes tiene 28 días");
        break;
    case 3:
        console.log("Este mes tiene 31 días");
        break;
    case 4:
        console.log("Este mes tiene 30 días");
        break;
    case 5:
        console.log("Este mes tiene 31 días");
        break;
    case 6:
        console.log("Este mes tiene 30 días");
        break;
    case 7:
        console.log("Este mes tiene 31 días");
        break;
    case 8:
        console.log("Este mes tiene 30 días");
        break;
    case 9:
        console.log("Este mes tiene 30 días");
        break;
    case 10:
        console.log("Este mes tiene 31 días");
        break;
    case 11:
        console.log("Este mes tiene 30 días");
        break;
    case 12:
        console.log("Este mes tiene 31 días");    
        break;


}